import { initMap } from "./map-init.js";
import { current_location } from "./geolocation.js";
import { createFlightRouteLayer } from "./flight-path.js";
import { fetchFeatures, createWfsLayer } from "./load-wfs.js";
import { loadWms } from "./load-wms.js";
import { fromLonLat } from "ol/proj";
import { checkIntersection, initDrawTools } from "./draw.js";
import { createWMTSLayer } from "./load-wmts.js";
import { saveDrawing } from "./save-drawing.js";
import { fetchDrawing } from "./fetch-drawing.js";
import { deleteDrawing } from "./delete-drawing.js";
import { Select } from 'ol/interaction';
import { click } from 'ol/events/condition';
import { createBuffer } from "./buffer-tools.js";
import { activateSelectInteraction } from "./select-feature.js";
import { geometryOps } from "./geometry-operations.js";
import { showPopupMessage } from "./utils.js";

const geoserverURL = "http://localhost:8080/geoserver";
const geoserverWFSURL = "http://localhost:8080/geoserver/ows";
const workspace = "ne"; // Replace with your workspace
const layerName = "draw_layer"; // Replace with your layer name
const username = "admin"; // Replace with your username
const password = "geoserver"; // Replace with your password

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize map
  const map = initMap();
  
  // Make map available globally for debugging
  window.map = map;

  // Initialize drawing tools with our map instance
  const drawTools = initDrawTools(map);
  
  // Add a Select interaction for selecting features to delete or union
  const select = new Select({
    condition: click
  });
  
  // Make select available globally for debugging
  window.select = select;
  
  map.addInteraction(select);

  // Add event listener for the drawing toggle
  const drawingToggle = document.getElementById('drawing-active');
  drawingToggle.addEventListener('change', (event) => {
    drawTools.setActive(event.target.checked);
    // Optionally hide/show the draw controls when disabled
    const drawControls = document.getElementById('draw-controls');
    drawControls.style.opacity = event.target.checked ? '1' : '0.5';
    drawControls.style.pointerEvents = event.target.checked ? 'auto' : 'none';
  });

  const features = await fetchFeatures(geoserverWFSURL,'ne','draw_layer', 'admin','geoserver')
  const wfsLayer = createWfsLayer(features);
  map.addLayer(wfsLayer);
  
  // Save drawing event listener
  document.getElementById('save-drawing').addEventListener('click', async () => {
    const features = drawTools.source.getFeatures();
    
    if (features.length === 0) {
      showPopupMessage('No features to save', 'warning');
      return;
    }
    
    const result = await saveDrawing(
      features,
      workspace,
      layerName,
      'EPSG:3857',
      username,
      password,
      geoserverURL
    );
    
    if (result.status === 'success') {
      showPopupMessage(`Successfully saved ${result.totalInserted || features.length} features`, 'success');
    } else {
      showPopupMessage(`Error: ${result.message || 'Unknown error'}`, 'error');
    }
  });
  
  // Load drawing event listener
  document.getElementById('load-drawing').addEventListener('click', async () => {
    const result = await fetchDrawing(
      geoserverWFSURL,
      workspace,
      layerName,
      username,
      password
    );
    
    if (result.status === 'success') {
      // Clear existing features and add the loaded ones
      drawTools.source.clear();
      drawTools.source.addFeatures(result.features);
      
      // Fit the view to show all features if there are any
      if (result.features.length > 0) {
        map.getView().fit(drawTools.source.getExtent(), {
          padding: [50, 50, 50, 50],
          duration: 1000
        });
      }
      
      showPopupMessage(`Loaded ${result.count} features`, 'success');
    } else {
      showPopupMessage(`Error: ${result.message || 'Unknown error'}`, 'error');
    }
  });
  
  // Delete drawing event listener
  document.getElementById('delete-drawing').addEventListener('click', async () => {
    const selectedFeatures = select.getFeatures().getArray();
    
    if (selectedFeatures.length === 0) {
      showPopupMessage('No features selected for deletion', 'warning');
      return;
    }
    
    if (!confirm(`Are you sure you want to delete ${selectedFeatures.length} features?`)) {
      return;
    }
    
    const result = await deleteDrawing(
      selectedFeatures,
      workspace,
      layerName,
      'EPSG:3857',
      username,
      password,
      geoserverURL
    );
    
    if (result.status === 'success') {
      // Remove the features from the local source
      selectedFeatures.forEach(feature => {
        drawTools.source.removeFeature(feature);
      });
      
      // Clear selection
      select.getFeatures().clear();
      
      showPopupMessage(`Successfully deleted ${result.totalDeleted || selectedFeatures.length} features`, 'success');
    } else {
      showPopupMessage(`Error: ${result.message || 'Unknown error'}`, 'error');
    }
  });

  // Add union features functionality
  document.getElementById('union-features')?.addEventListener('click', () => {
    console.log("Union button clicked");
    const selectedFeatures = select.getFeatures().getArray();
    console.log("Selected features:", selectedFeatures);
    
    if (selectedFeatures.length < 2) {
      showPopupMessage('Select at least two features to union', 'warning');
      return;
    }
    
    // Import the function dynamically to ensure we're using the latest version
    import('./union-tool.js').then(module => {
      const unionFeature = module.unionFeatures(selectedFeatures, drawTools.source);
      console.log("Union result:", unionFeature);
      
      if (unionFeature) {
        // Clear selection
        select.getFeatures().clear();
        // Select the new union feature
        select.getFeatures().push(unionFeature);
      }
    }).catch(error => {
      console.error("Error importing union-tool module:", error);
      showPopupMessage("Failed to perform union operation: " + error.message, "error");
    });
  });
  
  // Direct union button event listener
  document.getElementById('direct-union')?.addEventListener('click', () => {
    console.log("Direct union button clicked");
    const selectedFeatures = select.getFeatures().getArray();
    
    if (selectedFeatures.length < 2) {
      showPopupMessage('Select at least two features to union', 'warning');
      return;
    }
    
    // Import the function dynamically
    import('./union-tool.js').then(module => {
      try {
        const result = module.unionFeatures(selectedFeatures, drawTools.source);
        console.log("Union result:", result);
        
        if (result) {
          // Clear selection
          select.getFeatures().clear();
          // Select the new feature
          select.getFeatures().push(result);
          showPopupMessage("Union completed successfully", "success");
        }
      } catch (error) {
        console.error("Error during union operation:", error);
        showPopupMessage("Error during union: " + error.message, "error");
      }
    }).catch(error => {
      console.error('Error importing module:', error);
      showPopupMessage("Failed to load union module: " + error.message, "error");
    });
  });
  
  // Simple union button event listener
  document.getElementById('simple-union')?.addEventListener('click', () => {
    console.log("Simple union button clicked");
    const selectedFeatures = select.getFeatures().getArray();
    
    if (selectedFeatures.length < 2) {
      showPopupMessage('Select at least two features to union', 'warning');
      return;
    }
    
    // Import the function dynamically
    import('./union-tool.js').then(module => {
      try {
        const result = module.unionFeatures(selectedFeatures, drawTools.source);
        console.log("Simple union result:", result);
        
        if (result) {
          // Clear selection
          select.getFeatures().clear();
          // Select the new feature
          select.getFeatures().push(result);
          showPopupMessage("Simple union completed successfully", "success");
        }
      } catch (error) {
        console.error("Error during simple union operation:", error);
        showPopupMessage("Error during simple union: " + error.message, "error");
      }
    }).catch(error => {
      console.error('Error importing module:', error);
      showPopupMessage("Failed to load union module: " + error.message, "error");
    });
  });

  // Create buffer event listener
  document.getElementById('create-buffer').addEventListener('click', async () => {
    const selectedFeatures = select.getFeatures();

    if (selectedFeatures.getArray().length > 0) {
      selectedFeatures.forEach((feature) => {
        createBuffer(feature, 10, wfsLayer);
      });
      showPopupMessage("Buffer created successfully", "success");
    } else {
      showPopupMessage("No features selected for buffer", "warning");
    }
  });

  // Add WMTS layer event listener
  document.getElementById("add-wmts").addEventListener("click", async () => {
    const extent = [
      9975165.7992, 3174385.502833938, 9983429.539675102, 3192174.929474232,
    ];
    const wmtsLayer = createWMTSLayer(
      geoserverURL,
      "ne",
      "thromdeBoundary",
      extent
    );
    map.addLayer(wmtsLayer);
    map.getView().fit(extent);
    showPopupMessage("WMTS layer added", "success");
  });

  // Export GeoJSON event listener
  document.getElementById('export-drawing')?.addEventListener('click', () => {
    const features = drawTools.source.getFeatures();
    
    if (features.length === 0) {
      showPopupMessage('No features to export', 'warning');
      return;
    }
    
    try {
      const format = new GeoJSON();
      const geojson = format.writeFeatures(features, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      });
      
      // Create a download link
      const blob = new Blob([geojson], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'export.geojson';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showPopupMessage(`Exported ${features.length} features to GeoJSON`, 'success');
    } catch (error) {
      console.error("Error exporting to GeoJSON:", error);
      showPopupMessage(`Error exporting to GeoJSON: ${error.message}`, 'error');
    }
  });

  setTimeout(() => {
    document.body.classList.remove("initial-load");
  }, 3000);
});
