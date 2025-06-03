import { transactWFS } from './geoserver-crud.js';

/**
 * Delete features from GeoServer
 * @param {Array} features - Array of OpenLayers features to delete
 * @param {string} workspace - GeoServer workspace name
 * @param {string} layerName - GeoServer layer name
 * @param {string} srs - Spatial reference system (default: 'EPSG:3857')
 * @param {string} username - GeoServer username
 * @param {string} password - GeoServer password
 * @param {string} geoserverURL - GeoServer URL
 * @returns {Promise} - Promise resolving to the result of the operation
 */
export async function deleteDrawing(features, workspace, layerName, srs = 'EPSG:3857', username, password, geoserverURL) {
  if (features.length === 0) {
    return { status: 'error', message: 'No features selected for deletion' };
  }
  
  try {
    const result = await transactWFS(
      'delete',
      features,
      workspace,
      layerName,
      srs,
      username,
      password,
      geoserverURL
    );
    
    return result;
  } catch (error) {
    console.error('Error deleting features:', error);
    return { 
      status: 'error', 
      message: error.message || 'Unknown error occurred while deleting'
    };
  }
}