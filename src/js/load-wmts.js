import WMTSCapabilities from 'ol/format/WMTSCapabilities';
import WMTS, {
    optionsFromCapabilities
} from 'ol/source/WMTS';
import TileLayer from 'ol/layer/WebGLTile.js';


export function getNewWMTSSource(geoserverURL, remoteLayer, localLayer) {
        const url = geoserverURL + '/gwc/service/wmts?REQUEST=GetCapabilities&SERVICE=WMTS';
        var parser = new WMTSCapabilities();
        let options;
        fetch(url, {
            crossOrigin: 'anonymous',
            mode: 'cors'
        }).then(function (response) {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Network response was not ok!");
            }
        }).then(function (text) {
            const result = parser.read(text);
            if (remoteLayer == 'ne:thromdeBoundary') {
                const layerOptions = result.Contents.Layer.find(layer => layer.Identifier === remoteLayer);
                if (layerOptions) {
                    options = optionsFromCapabilities(result, {
                        layer: remoteLayer,
                        matrixSet: layerOptions.TileMatrixSetLink[1].TileMatrixSet,
                        crossOrigin: 'anonymous',
                        mode: 'cors'
                    });
                }
            }
            if (options) {
                localLayer.setSource(new WMTS(options));
            }
        });
 
    };


export function createWMTSLayer(geoserverURL, workspace, layer_name, extent){

    const wmtsLayer = new TileLayer({
        extent: extent,
        title: "wmts-layer"
      });

    const layer = `${workspace}:${layer_name}`;
    const wmtsSource = getNewWMTSSource(geoserverURL, layer, wmtsLayer);
    
    return wmtsLayer;
    
}
