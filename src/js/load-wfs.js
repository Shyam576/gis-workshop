import WFS from 'ol/format/WFS';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

export function buildWFSRequest({ srsName, featurePrefix, featureType, filter }) {
  const wfsFormat = new WFS();
  return wfsFormat.writeGetFeature({
    srsName,
    featurePrefix,
    featureTypes: [featureType],
    outputFormat: 'application/json',
    filter: filter,
  });
}

export async function postWFSRequest({ url, xmlRequest, headers }) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers,
    body: new XMLSerializer().serializeToString(xmlRequest),
  });

  if (!response.ok) {
    throw new Error(`WFS request failed: ${response.statusText}`);
  }

  return await response.json();
}


export function parseWFSGeoJSON(json, projection = 'EPSG:3857') {
  const geojsonFormat = new GeoJSON();
  return geojsonFormat.readFeatures(json);
}


export async function fetchFeatures(url='https://localhost:8080/geoserver/ows', workspace, layer_name, user, password) {
  const geoserverURL = url;
  const workingPrefix = workspace;
  const workingGeoserverLayer = layer_name;


  const xmlRequest = buildWFSRequest({
    srsName: 'EPSG:3857',
    featurePrefix: workingPrefix,
    featureType: workingGeoserverLayer,
  });

  const json = await postWFSRequest({
    url: geoserverURL,
    xmlRequest,
    headers: {
      'Content-Type': 'text/xml',
      'Authorization': 'Basic ' + btoa(`${user}:${password}`),
    }
  });

  const features = parseWFSGeoJSON(json);

  return features
}


export function createWfsLayer(features){
    const layerSource = new VectorSource();
    layerSource.addFeatures(features);

    const styleFunction = (feature) => {
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

    const layer = new VectorLayer({
        source:layerSource,
        style:styleFunction,
        title:"wfs-layer"
    });

    return layer


}
