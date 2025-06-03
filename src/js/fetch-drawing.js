import { fetchFeatures } from './load-wfs.js';

/**
 * Fetch drawings from GeoServer
 * @param {string} geoserverURL - GeoServer URL
 * @param {string} workspace - GeoServer workspace name
 * @param {string} layerName - GeoServer layer name
 * @param {string} username - GeoServer username
 * @param {string} password - GeoServer password
 * @returns {Promise} - Promise resolving to an array of features
 */
export async function fetchDrawing(geoserverURL, workspace, layerName, username, password) {
  try {
    const features = await fetchFeatures(
      geoserverURL,
      workspace,
      layerName,
      username,
      password
    );
    
    return {
      status: 'success',
      features: features,
      count: features.length
    };
  } catch (error) {
    console.error('Error fetching features:', error);
    return {
      status: 'error',
      message: error.message || 'Unknown error occurred while fetching',
      features: []
    };
  }
}