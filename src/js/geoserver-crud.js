import WFS from 'ol/format/WFS';

function parseWFSResponse(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Check for Exception
  const exception = xmlDoc.querySelector('ows\\:Exception, Exception');
  if (exception) {
    return {
      status: 'error',
      message: exception.textContent.trim()
    };
  }

  // Parse TransactionSummary
  const summary = xmlDoc.querySelector('wfs\\:TransactionSummary, TransactionSummary');
  if (summary) {
    const inserted = summary.querySelector('wfs\\:totalInserted, totalInserted')?.textContent || '0';
    const updated = summary.querySelector('wfs\\:totalUpdated, totalUpdated')?.textContent || '0';
    const deleted = summary.querySelector('wfs\\:totalDeleted, totalDeleted')?.textContent || '0';

    const insertResults = xmlDoc.querySelectorAll('wfs\\:InsertResults wfs\\:Feature wfs\\:FeatureId, InsertResults Feature FeatureId');
    const fids = Array.from(insertResults).map(el => el.getAttribute('fid'));

    return {
      status: 'success',
      totalInserted: parseInt(inserted),
      totalUpdated: parseInt(updated),
      totalDeleted: parseInt(deleted),
      insertedFIDs: fids
    };
  }

  // Fallback if structure is unexpected
  return {
    status: 'unknown',
    raw: xmlString
  };
}

export async function transactWFS(type, features, workspace, layerName, srs = 'EPSG:3857', user, password, geoserverURL) {
  const formatWFS = new WFS();

  const node = formatWFS.writeTransaction(
    type === 'insert' ? features : [],
    type === 'update' ? features : [],
    type === 'delete' ? features : [],
    {
      featureType: layerName,
      featureNS: 'https://www.naturalearthdata.com',
      srsName: srs,
      featurePrefix: workspace,
    }
  );

  const serializer = new XMLSerializer();
  const payload = serializer.serializeToString(node);

  try {
    const url = geoserverURL + '/wfs'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': 'Basic ' + btoa(`${user}:${password}`)
      },
      body: payload
    });

    const responseText = await res.text();

    if (!res.ok) {
      throw new Error(`WFS-T ${type} failed with status ${res.status}: ${responseText}`);
    }

    const jsonResponse = parseWFSResponse(responseText);
    return jsonResponse;

  } catch (error) {
    console.error('WFS-T error:', error);
    throw error;
  }
}
