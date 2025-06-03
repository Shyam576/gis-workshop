import { transactWFS } from "./geoserver-crud.js";
import { Feature } from "ol";
/**
 * Save drawn features to GeoServer
 * @param {Array} features - Array of OpenLayers features to save
 * @param {string} workspace - GeoServer workspace name
 * @param {string} layerName - GeoServer layer name
 * @param {string} srs - Spatial reference system (default: 'EPSG:3857')
 * @param {string} username - GeoServer username
 * @param {string} password - GeoServer password
 * @param {string} geoserverURL - GeoServer URL
 * @returns {Promise} - Promise resolving to the result of the operation
 */
export async function saveDrawing(
  features,
  workspace,
  layerName,
  srs = "EPSG:3857",
  username,
  password,
  geoserverURL
) {
  if (features.length === 0) {
    return { status: "error", message: "No features to save" };
  }

  try {
    const preparedFeatures = features.map((feature) => {
      const newFeat = new Feature();
      newFeat.setGeometryName("geom");
      newFeat.setGeometry(feature.getGeometry());
      newFeat.setProperties({"name":'test'})

      const props = feature.getProperties();
      delete props.geometry;
      newFeat.setProperties(props);

      if (props.fid) {
        newFeat.setId(props.fid);
      }
      return newFeat;
    });
    const newFeatures = preparedFeatures.filter((f) => !f.getId());
    const modifiedFeatures = preparedFeatures.filter((f) => f.getId());

    let result = { status: "success", totalInserted: 0, totalUpdated: 0 };

    if (newFeatures.length > 0) {
      const insertResult = await transactWFS(
        "insert",
        newFeatures,
        workspace,
        layerName,
        srs,
        username,
        password,
        geoserverURL
      );

      if (insertResult.insertedFIDs && insertResult.insertedFIDs.length > 0) {
        insertResult.insertedFIDs.forEach((fid, index) => {
          const featureId = parseInt(fid.split(".")[1]);
          features[index].setProperties({ fid: featureId });
        });
      }
      result.totalInserted = insertResult.totalInserted || newFeatures.length;
      result = { ...result, ...insertResult };
    }

    if (modifiedFeatures.length > 0) {
      const updateResult = await transactWFS(
        "update",
        modifiedFeatures,
        workspace,
        layerName,
        srs,
        username,
        password,
        geoserverURL
      );

      result.totalUpdated =
        updateResult.totalUpdated || modifiedFeatures.length;
      result = { ...result, ...updateResult };
    }

    return result;

    // const result = await transactWFS(
    //   'insert',
    //   features,
    //   workspace,
    //   layerName,
    //   srs,
    //   username,
    //   password,
    //   geoserverURL
    // );
    // console.log("Result: ",result)
    // return result;
  } catch (error) {
    console.error("Error saving features:", error);
    return {
      status: "error",
      message: error.message || "Unknown error occurred while saving",
    };
  }
}
