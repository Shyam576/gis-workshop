import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";

export function loadWms(geoserverURL, layer_name, workspace) {
  const url = geoserverURL + "/wms";
  console.log("Hello from function ")
  const layer = new TileLayer({
    source: new TileWMS({
      url: url,
      params: { "LAYERS": workspace + ":" + layer_name, "TILED": true },
      serverType: "geoserver",
      transition: 0,
    }),
    title: "wms-layer-" + layer_name,
  });
  return layer;
}
