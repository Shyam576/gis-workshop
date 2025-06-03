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

const geoserverURL = "http://localhost:8080/geoserver";
const geoserverWFSURL = "http://localhost:8080/geoserver/ows";
const workspace = "ne"; // Replace with your workspace
const layerName = "draw_layer"; // Replace with your layer name
const username = "admin"; // Replace with your username
const password = "geoserver"; // Replace with your password

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize map
  const map = initMap();

  // Initialize drawing tools with our map instance
  const drawTools = initDrawTools(map);
  
  // Add a Select interaction for selecting features to delete
  const select = new Select({
    condition: click
  });
  
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
      alert('No features to save');
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
      alert(`Successfully saved ${result.totalInserted || features.length} features`);
    } else {
      alert(`Error: ${result.message || 'Unknown error'}`);
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
      
      alert(`Loaded ${result.count} features`);
    } else {
      alert(`Error: ${result.message || 'Unknown error'}`);
    }
  });
  
  // Delete drawing event listener
  document.getElementById('delete-drawing').addEventListener('click', async () => {
    const selectedFeatures = select.getFeatures().getArray();
    
    if (selectedFeatures.length === 0) {
      alert('No features selected for deletion');
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
      
      alert(`Successfully deleted ${result.totalDeleted || selectedFeatures.length} features`);
    } else {
      alert(`Error: ${result.message || 'Unknown error'}`);
    }
  });

  setTimeout(() => {
    document.body.classList.remove("initial-load");
  }, 3000);
  //   document.getElementById("loc-button").addEventListener('click', async () => {
  //     const view = map.getView();
  //     const hasLocationLayer = map.getLayers().getArray().some(layer => layer.get('title') === 'location-layer');
  //     if (!hasLocationLayer) {
  //     current_location(view).then(({ layer }) => {
  //         map.addLayer(layer);
  //     });
  // }

  //     });

  // document
  //   .getElementById("flight-button")
  //   .addEventListener("click", async () => {
  //     const view = map.getView();
  //     const location = await current_location(view);
  //     const current_location_point = location.pointFeature;
  //     const destLocation = current_location_point
  //       .getGeometry()
  //       .transform("EPSG:3857", "EPSG:4326")
  //       .getCoordinates();

  //     const flight_layer = createFlightRouteLayer(destLocation, view);
  //     map.addLayer(flight_layer);
  //   });

  // document.getElementById("add-wfs").addEventListener("click", async () => {
  //   const features = await fetchFeatures(
  //     "http://localhost:9090/geoserver/ows",
  //     "topp",
  //     "states",
  //     "admin",
  //     "geoserver"
  //   );

  //   const hasWfsLayer = map
  //     .getLayers()
  //     .getArray()
  //     .some((layer) => layer.get("title") === "wfs-layer");
  //   if (!hasWfsLayer) {
  //     const wfsLayer = createWfsLayer(features);
  //     map.getView().fit(wfsLayer.getSource().getExtent(), {
  //       padding: [50, 50, 50, 50],
  //       duration: 1000,
  //     });
  //     map.addLayer(wfsLayer);
  //   }
  // });

  // document.getElementById("add-wms").addEventListener("click", async () => {
  //   const geoserverURL = "http://localhost:8080/geoserver/ows";
  //   const workspace = "ne";
  //   const layer_name = "thromdeBoundary";

  //   // Check if layer already exists
  //   const hasLayer = map
  //     .getLayers()
  //     .getArray()
  //     .some((layer) => layer.get("title") === "wms-layer-" + layer_name);

  //   if (hasLayer) {
  //     // Remove layer if it exists
  //     map.getLayers().forEach((layer) => {
  //       if (layer.get("title") === "wms-layer-" + layer_name) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //   } else {
  //     // Add layer if it doesn't exist
  //     const layer = loadWms(geoserverURL, layer_name, workspace);
  //     map.addLayer(layer);
  //     const thimphuCoords = fromLonLat([89.638427, 27.478586]); // Thimphu coordinates

  //     // Animate to the new location
  //     map.getView().animate({
  //       center: thimphuCoords,
  //       zoom: 14,
  //       duration: 1000,
  //     });
  //   }
  // });

  // document.getElementById("add-lines").addEventListener("click", async () => {
  //   const geoserverURL = "http://localhost:8080/geoserver/ows";
  //   const workspace = "ne";
  //   const layer_name = "thimphu";

  //   // Check if layer already exists
  //   const hasLayer = map
  //     .getLayers()
  //     .getArray()
  //     .some((layer) => layer.get("title") === "wms-layer-" + layer_name);

  //   if (hasLayer) {
  //     // Remove layer if it exists
  //     map.getLayers().forEach((layer) => {
  //       if (layer.get("title") === "wms-layer-" + layer_name) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //   } else {
  //     // Add layer if it doesn't exist
  //     const layer = loadWms(geoserverURL, layer_name, workspace);

  //     map.addLayer(layer);
  //     const thimphuCoords = fromLonLat([89.638427, 27.478586]); // Thimphu coordinates

  //     // Animate to the new location
  //     map.getView().animate({
  //       center: thimphuCoords,
  //       zoom: 14,
  //       duration: 1000,
  //     });
  //   }
  // });

  // document.getElementById("add-points").addEventListener("click", async () => {
  //   const geoserverURL = "http://localhost:8080/geoserver/ows";
  //   const workspace = "ne";
  //   const layer_name = "thromdeFTTHPoints";

  //   // Check if layer already exists
  //   const hasLayer = map
  //     .getLayers()
  //     .getArray()
  //     .some((layer) => layer.get("title") === "wms-layer-" + layer_name);

  //   if (hasLayer) {
  //     // Remove layer if it exists
  //     map.getLayers().forEach((layer) => {
  //       if (layer.get("title") === "wms-layer-" + layer_name) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //   } else {
  //     // Add layer if it doesn't exist
  //     const layer = loadWms(geoserverURL, layer_name, workspace);
  //     map.addLayer(layer);

  //     // Convert coordinates from lon/lat to the map's projection
  //     const thimphuCoords = fromLonLat([89.638427, 27.478586]); // Thimphu coordinates

  //     // Animate to the new location
  //     map.getView().animate({
  //       center: thimphuCoords,
  //       zoom: 14,
  //       duration: 1000,
  //     });
  //   }
  // });

  // document.getElementById("add-raster").addEventListener("click", async () => {
  //   const geoserverURL = "http://localhost:8080/geoserver/ows";
  //   const workspace = "nurc";
  //   const layer_name = "mosaic";

  //   // Check if layer already exists
  //   const hasLayer = map
  //     .getLayers()
  //     .getArray()
  //     .some((layer) => layer.get("title") === "wms-layer-" + layer_name);

  //   if (hasLayer) {
  //     // Remove layer if it exists
  //     map.getLayers().forEach((layer) => {
  //       if (layer.get("title") === "wms-layer-" + layer_name) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //   } else {
  //     // Add layer if it doesn't exist
  //     const layer = loadWms(geoserverURL, layer_name, workspace);
  //     map.addLayer(layer);

  //     // Convert coordinates from lon/lat to the map's projection
  //     const thimphuCoords = fromLonLat([12.4964, 41.9028]); // Thimphu coordinates

  //     // Animate to the new location
  //     map.getView().animate({
  //       center: thimphuCoords,
  //       zoom: 4,
  //       duration: 1000,
  //     });
  //   }
  // });
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
  });

  // const featureSelection = activateSelectInteraction(map)
  document.getElementById('create-buffer').addEventListener('click', async()=>{

    const selectedFeatures = select.getFeatures();

    if(selectedFeatures.getArray().length>0){
      selectedFeatures.forEach((feature)=>{
        createBuffer(feature,10,wfsLayer)
      })
    }

  })

  
});
