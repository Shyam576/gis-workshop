import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Fill, Stroke } from 'ol/style';
import { fromLonLat } from 'ol/proj';

/**
 * Creates a polygon layer with the specified coordinates
 * @param {Array<Array<number>>} coordinates Array of [lon, lat] coordinates
 * @param {Object} options Optional styling and configuration
 * @returns {VectorLayer} The polygon vector layer
 */
export function createPolygonLayer(coordinates, options = {}) {
  // Default options
  const defaults = {
    fillColor: 'rgba(255, 0, 0, 0.2)',
    strokeColor: 'rgba(255, 0, 0, 0.8)',
    strokeWidth: 2,
    title: 'polygon-layer',
    fit: true,
    padding: [50, 50, 50, 50],
    duration: 1000
  };
  
  const config = { ...defaults, ...options };
  
  // Convert all coordinates from [lon, lat] to map projection
  const projectedCoords = coordinates.map(coord => fromLonLat(coord));
  
  // Create a closed linear ring (first and last points must be the same)
  if (projectedCoords.length > 0 && 
      (projectedCoords[0][0] !== projectedCoords[projectedCoords.length-1][0] || 
       projectedCoords[0][1] !== projectedCoords[projectedCoords.length-1][1])) {
    projectedCoords.push(projectedCoords[0]);
  }
  
  // Create polygon geometry - note the extra array nesting required by OpenLayers
  const polygonGeom = new Polygon([projectedCoords]);
  
  // Create feature with the polygon geometry
  const polygonFeature = new Feature({
    geometry: polygonGeom,
    name: 'Custom Polygon'
  });
  
  // Style the polygon
  polygonFeature.setStyle(new Style({
    fill: new Fill({
      color: config.fillColor
    }),
    stroke: new Stroke({
      color: config.strokeColor,
      width: config.strokeWidth
    })
  }));
  
  // Create vector source and layer
  const source = new VectorSource({
    features: [polygonFeature]
  });
  
  const layer = new VectorLayer({
    source: source,
    title: config.title
  });
  
  // If fit is true, we'll return the extent so the caller can fit the view
  if (config.fit) {
    layer.extent = polygonGeom.getExtent();
    layer.fitOptions = {
      padding: config.padding,
      duration: config.duration
    };
  }
  
  return layer;
}

/**
 * Creates a sample polygon around a center point
 * @param {Array<number>} center [lon, lat] center coordinates
 * @param {number} radius Radius in kilometers
 * @param {number} sides Number of sides for the polygon
 * @returns {VectorLayer} The polygon vector layer
 */
export function createRegularPolygon(center, radius = 1, sides = 6) {
  const coordinates = [];
  const [centerLon, centerLat] = center;
  
  // Earth's radius in kilometers
  const earthRadius = 6371;
  
  // Convert radius from kilometers to degrees (approximate)
  const radiusLon = (radius / earthRadius) * (180 / Math.PI) / Math.cos(centerLat * Math.PI / 180);
  const radiusLat = (radius / earthRadius) * (180 / Math.PI);
  
  // Generate points around the center
  for (let i = 0; i < sides; i++) {
    const angle = (2 * Math.PI * i) / sides;
    const lon = centerLon + radiusLon * Math.cos(angle);
    const lat = centerLat + radiusLat * Math.sin(angle);
    coordinates.push([lon, lat]);
  }
  
  return createPolygonLayer(coordinates, {
    fillColor: 'rgba(0, 128, 255, 0.2)',
    strokeColor: 'rgba(0, 128, 255, 0.8)',
    title: 'regular-polygon-layer'
  });
}