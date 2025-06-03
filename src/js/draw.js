import Draw from 'ol/interaction/Draw';
import { transactWFS } from './geoserver-crud.js';
import { Feature } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Modify from 'ol/interaction/Modify.js';
import Snap from 'ol/interaction/Snap.js';
import { showPopupMessage } from './popup-message.js';
import { intersects } from 'ol/extent.js';
import GeoJSON from 'ol/format/GeoJSON';
import { getArea } from 'ol/sphere';
// Import OpenLayers geometry classes for JSTS parser
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import LinearRing from 'ol/geom/LinearRing';
import Polygon from 'ol/geom/Polygon';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPolygon from 'ol/geom/MultiPolygon';
import GeometryCollection from 'ol/geom/GeometryCollection';
// Import JSTS for precise intersection checking
import OL3Parser from 'jsts/org/locationtech/jts/io/OL3Parser';
import { RelateOp } from 'jsts/org/locationtech/jts/operation/relate';

/**
 * Check if a feature intersects with any existing features in the layer
 * @param {Feature} feature - The feature to check
 * @param {VectorLayer} layer - The vector layer containing existing features
 * @param {boolean} showAlert - Whether to show an alert message
 * @returns {boolean} - True if intersection found, false otherwise
 */
export function checkIntersection(feature, layer, showAlert = true) {
  if (!feature || !layer) return false;
  
  const drawGeom = feature.getGeometry();
  if (!drawGeom) return false;
  
  // Use JSTS for precise intersection checking
  const parser = new OL3Parser();
  parser.inject(
    Point, 
    LineString, 
    LinearRing, 
    Polygon, 
    MultiPoint, 
    MultiLineString, 
    MultiPolygon, 
    GeometryCollection
  );
  
  // Convert the drawn geometry to JSTS geometry
  const jstsGeom = parser.read(drawGeom);
  
  // Get the extent of the drawn geometry for quick filtering
  const drawGeomExtent = drawGeom.getExtent();
  let hasIntersection = false;
  let intersectingFeature = null;
  
  // Check against each existing feature
  layer.getSource().getFeatures().forEach(existingFeature => {
    // Skip checking against itself
    if (existingFeature === feature) return;
    
    const existingGeom = existingFeature.getGeometry();
    if (!existingGeom) return;
    
    // Quick check with extents first (bounding boxes)
    if (intersects(drawGeomExtent, existingGeom.getExtent())) {
      // Convert existing geometry to JSTS geometry
      const jstsExistingGeom = parser.read(existingGeom);
      
      // Perform precise intersection check
      if (RelateOp.intersects(jstsGeom, jstsExistingGeom)) {
        hasIntersection = true;
        intersectingFeature = existingFeature;
        
        // Show alert if requested
        if (showAlert) {
          const featureType = drawGeom.getType();
          const existingType = existingGeom.getType();
          showPopupMessage(`Intersection detected between ${featureType} and existing ${existingType}`, 'warning');
          
          // Highlight the intersecting feature
          highlightIntersectingFeature(existingFeature, layer);
        }
        
        // We found an intersection, no need to check further
        return;
      }
    }
  });
  
  return hasIntersection;
}

/**
 * Temporarily highlight an intersecting feature
 * @param {Feature} feature - The feature to highlight
 * @param {VectorLayer} layer - The vector layer containing the feature
 */
function highlightIntersectingFeature(feature, layer) {
  // Store the original style
  const originalStyle = feature.getStyle() || layer.getStyle();
  
  // Set a highlight style
  feature.setStyle(new Style({
    stroke: new Stroke({
      color: 'red',
      width: 3
    }),
    fill: new Fill({
      color: 'rgba(255, 0, 0, 0.3)'
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: 'red'
      })
    })
  }));
  
  // Reset to original style after 2 seconds
  setTimeout(() => {
    feature.setStyle(originalStyle);
  }, 2000);
}

/**
 * Calculate area of a polygon feature in square meters and hectares
 * @param {Feature} feature - The feature to calculate area for
 * @returns {Object} - Object containing area in square meters and hectares
 */
export function calculateArea(feature) {
  if (!feature) return { m2: 0, ha: 0 };
  
  const geometry = feature.getGeometry();
  if (!geometry || geometry.getType() !== 'Polygon') {
    return { m2: 0, ha: 0 };
  }
  
  // Get area in square meters
  const areaInM2 = getArea(geometry);
  // Convert to hectares (1 hectare = 10,000 m²)
  const areaInHa = areaInM2 / 10000;
  
  return {
    m2: Math.round(areaInM2 * 100) / 100, // Round to 2 decimal places
    ha: Math.round(areaInHa * 10000) / 10000 // Round to 4 decimal places
  };
}

export function enableDraw(map, vectorLayer, drawType = 'Polygon', geoserverURL) {
  let drawnfeatures = [];
  let modifiedFeatures = [];
  let isDrawing = false;
  let originalFeatureGeometries = new Map(); // Store original geometries for potential rollback
  
  // Create draw interaction
  const draw = new Draw({
    source: vectorLayer.getSource(),
    type: drawType
  });

  map.addInteraction(draw);
  
  // Track when drawing starts
  draw.on('drawstart', (event) => {
    isDrawing = true;
    console.log('Drawing started');
  });

  // Handle drawing end
  draw.on('drawend', async (event) => {
    isDrawing = false;
    console.log('Drawing ended');
    const feature = event.feature;
    
    // Check for intersections with existing features
    const hasIntersection = checkIntersection(feature, vectorLayer);
    console.log('Intersection check result:', hasIntersection);
    
    // If intersection is found and we want to prevent it
    const preventIntersections = document.getElementById('prevent-intersections')?.checked || false;
    if (hasIntersection && preventIntersections) {
      // Remove the feature that was just drawn
      vectorLayer.getSource().removeFeature(feature);
      showPopupMessage('Drawing removed due to intersection with existing feature', 'warning');
      return;
    }
    
    // Calculate area for polygons
    if (drawType === 'Polygon') {
      const area = calculateArea(feature);
      feature.setProperties({
        'area_m2': area.m2,
        'area_ha': area.ha
      });
      
      // Show area information
      showPopupMessage(`Area: ${area.m2} m² (${area.ha} ha)`, 'info');
    }

    const newFeat = new Feature();
    newFeat.setGeometryName('geom');
    newFeat.setGeometry(feature.getGeometry());
    newFeat.setProperties({
      'name': 'test',
      ...feature.getProperties()
    });
    
    const autoSave = document.getElementById('auto-save')?.checked || false;
    if (autoSave) {
      try {
        const res = await transactWFS('insert', [newFeat], 'ne', 'draw_layer', 'EPSG:3857', 'admin', 'geoserver', geoserverURL);
        const featureId = parseInt(res.insertedFIDs[0].split('.')[1]);
        
        event.feature.setProperties({'fid': featureId});
        console.log('Feature drawn and saved to server');
      } catch (error) {
        console.error('Error saving feature:', error);
        showPopupMessage('Error saving feature to server', 'error');
      }
    } else {
      drawnfeatures.push(newFeat);
      console.log('Feature drawn and saved to memory');
    }
  });

  const modify = new Modify({source: vectorLayer.getSource()});
  map.addInteraction(modify);

  // Store original geometry before modification
  modify.on('modifystart', (event) => {
    const features = event.features.getArray();
    features.forEach(feature => {
      // Store a clone of the original geometry
      originalFeatureGeometries.set(feature, feature.getGeometry().clone());
    });
  });

  // Handle feature modification
  modify.on('modifyend', (event) => {
    console.log('Modification ended');
    const features = event.features.getArray();
    
    features.forEach(async (feature) => {
      // Check for intersections with existing features
      const hasIntersection = checkIntersection(feature, vectorLayer);
      console.log('Modification intersection check result:', hasIntersection);
      
      // If intersection is found and we want to prevent it
      const preventIntersections = document.getElementById('prevent-intersections')?.checked || false;
      if (hasIntersection && preventIntersections) {
        // Revert the modification using the stored original geometry
        const originalGeometry = originalFeatureGeometries.get(feature);
        if (originalGeometry) {
          feature.setGeometry(originalGeometry);
          showPopupMessage('Modification reverted due to intersection with existing feature', 'warning');
          return; // Skip the rest of the processing for this feature
        } else {
          showPopupMessage('Modification creates intersection with existing feature', 'warning');
        }
      }
      
      // Recalculate area for polygons
      if (feature.getGeometry().getType() === 'Polygon') {
        const area = calculateArea(feature);
        feature.setProperties({
          'area_m2': area.m2,
          'area_ha': area.ha
        });
        
        // Show updated area information
        showPopupMessage(`Updated area: ${area.m2} m² (${area.ha} ha)`, 'info');
      }
      
      const newFeat = new Feature();
      newFeat.setGeometryName('geom');
      newFeat.setGeometry(feature.getGeometry());
      newFeat.setId(feature.getProperties().fid);
      
      const autoSave = document.getElementById('auto-save')?.checked || false;
      if (autoSave) {
        try {
          await transactWFS('update', [newFeat], 'ne', 'draw_layer', 'EPSG:3857', 'admin', 'geoserver', geoserverURL);
          console.log('Feature modified and saved to server');
        } catch (error) {
          console.error('Error updating feature:', error);
          showPopupMessage('Error updating feature on server', 'error');
        }
      } else {
        modifiedFeatures.push(newFeat);
        console.log('Feature modified and saved to memory');
      }
    });
    
    // Clear the stored geometries
    originalFeatureGeometries.clear();
  });

  const snap = new Snap({source: vectorLayer.getSource()});
  map.addInteraction(snap);

  return {
    draw,
    modify,
    snap,
    disable: () => {
      map.removeInteraction(draw);
      map.removeInteraction(modify);
      map.removeInteraction(snap);
    },
    save: async () => {
      let res;
      let savedCount = 0;
      if (drawnfeatures.length > 0) {
        try {
          res = await transactWFS('insert', drawnfeatures, 'ne', 'draw_layer', 'EPSG:3857', 'admin', 'geoserver', geoserverURL);
          savedCount += drawnfeatures.length;
          drawnfeatures = [];
        } catch (error) {
          console.error('Error saving drawn features:', error);
          showPopupMessage('Error saving drawn features', 'error');
        }
      }

      if (modifiedFeatures.length > 0) {
        try {
          res = await transactWFS('update', modifiedFeatures, 'ne', 'draw_layer', 'EPSG:3857', 'admin', 'geoserver', geoserverURL);
          savedCount += modifiedFeatures.length;
          modifiedFeatures = [];
        } catch (error) {
          console.error('Error saving modified features:', error);
          showPopupMessage('Error saving modified features', 'error');
        }
      }

      if (savedCount > 0) {
        showPopupMessage(`Successfully saved ${savedCount} feature(s)!`, 'success');
      } else if (drawnfeatures.length === 0 && modifiedFeatures.length === 0) {
        showPopupMessage('No features to save', 'info');
      }

      return res;
    },
    delete: async () => {
      const source = vectorLayer.getSource();
      const features = source.getFeatures();
      if (features.length > 0) {
        const autoSave = document.getElementById('auto-save')?.checked || false;
        if (autoSave) {
          // Get all features with FIDs
          const featuresToDelete = features.filter(f => f.getProperties().fid);
          if (featuresToDelete.length > 0) {
            try {
              await transactWFS('delete', featuresToDelete, 'ne', 'draw_layer', 'EPSG:3857', 'admin', 'geoserver', geoserverURL);
            } catch (error) {
              console.error('Error deleting features:', error);
              showPopupMessage('Error deleting features from server', 'error');
            }
          }
        }
        // Clear all features from the source
        source.clear();
        drawnfeatures = [];
        modifiedFeatures = [];
        showPopupMessage('All features deleted', 'success');
      } else {
        showPopupMessage('No features to delete', 'info');
      }
    },
    exportGeoJSON: () => {
      const source = vectorLayer.getSource();
      const features = source.getFeatures();
      
      if (features.length === 0) {
        showPopupMessage('No features to export', 'info');
        return null;
      }
      
      const format = new GeoJSON();
      const geojson = format.writeFeaturesObject(features);
      
      // Add area properties for polygons
      geojson.features.forEach(feature => {
        if (feature.geometry.type === 'Polygon') {
          const olFeature = source.getFeatureById(feature.id);
          const area = calculateArea(olFeature);
          feature.properties.area_m2 = area.m2;
          feature.properties.area_ha = area.ha;
        }
      });
      
      return geojson;
    }
  };
}

export function createDrawLayer() {
  const drawSource = new VectorSource();
  const drawStyle = (feature) => {
    const type = feature.getGeometry().getType();

    if (type === 'Point' || type === 'MultiPoint') {
      return new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({ color: 'blue' }),
          stroke: new Stroke({ color: 'white', width: 1 }),
        }),
      });
    }

    if (type.includes('Line')) {
      return new Style({
        stroke: new Stroke({ color: 'green', width: 2 }),
      });
    }

    if (type.includes('Polygon')) {
      return new Style({
        stroke: new Stroke({ color: 'orange', width: 1 }),
        fill: new Fill({ color: 'rgba(255,165,0,0.3)' }),
      });
    }

    return new Style({
      stroke: new Stroke({ color: 'gray', width: 1 }),
      fill: new Fill({ color: 'rgba(200, 200, 200, 0.3)' })
    });
  };

  const drawLayer = new VectorLayer({
    source: drawSource,
    style: drawStyle,
    title: "draw-layer"
  });

  return drawLayer;
}
  
export function checkInteraction(lineDraw, polyDraw, pointDraw) {
  if (lineDraw) {
    lineDraw.disable();
  }
  if (polyDraw) {
    polyDraw.disable();
  }
  if (pointDraw) {
    pointDraw.disable();
  }
}

/**
 * Initialize drawing tools on an existing map
 * @param {import('ol/Map.js').default} map - The OpenLayers map instance
 * @returns {Object} - Object containing drawing tools and methods
 */
export function initDrawTools(map) {
  // Create a vector source and layer for the drawings
  const drawLayer = createDrawLayer();
  map.addLayer(drawLayer);
  
  // Get the source from the layer
  const source = drawLayer.getSource();
  
  // Create draw, modify, and snap interactions
  const typeSelect = document.getElementById('type');
  let draw, modify, snap;
  
  function addInteractions() {
    // Get the GeoServer URL from the global variable or use a default
    const geoserverURL = window.geoserverURL || "http://localhost:8080/geoserver";
    
    // Create drawing tools with the selected geometry type
    const drawingTools = enableDraw(map, drawLayer, typeSelect.value, geoserverURL);
    
    // Store references to the interactions
    draw = drawingTools.draw;
    modify = drawingTools.modify;
    snap = drawingTools.snap;
    
    return drawingTools;
  }
  
  // Initialize interactions with the default geometry type
  let drawingTools = addInteractions();
  
  // Handle change in geometry type
  if (typeSelect) {
    typeSelect.onchange = function() {
      // Remove existing interactions
      if (drawingTools && drawingTools.disable) {
        drawingTools.disable();
      }
      
      // Add new interactions with the selected geometry type
      drawingTools = addInteractions();
    };
  }
  
  // Return an object with methods to control the drawing tools
  return {
    source: source,
    layer: drawLayer,
    
    // Method to enable/disable drawing tools
    setActive: function(active) {
      if (active) {
        // Re-add interactions if they were removed
        if (!map.getInteractions().getArray().includes(draw)) {
          drawingTools = addInteractions();
        }
      } else {
        // Remove interactions if they exist
        if (drawingTools && drawingTools.disable) {
          drawingTools.disable();
        }
      }
    },
    
    // Method to save drawings
    save: function() {
      if (drawingTools && drawingTools.save) {
        return drawingTools.save();
      }
      return Promise.resolve({ status: 'error', message: 'Drawing tools not initialized' });
    },
    
    // Method to delete drawings
    delete: function() {
      if (drawingTools && drawingTools.delete) {
        return drawingTools.delete();
      }
      return Promise.resolve({ status: 'error', message: 'Drawing tools not initialized' });
    },
    
    // Method to export drawings as GeoJSON
    exportGeoJSON: function() {
      if (drawingTools && drawingTools.exportGeoJSON) {
        return drawingTools.exportGeoJSON();
      }
      return null;
    },
    
    // Reference to the source for direct access
    source: source
  };
}
