import { Feature } from "ol";
import {showPopupMessage} from "./popup-message.js";
import Polygon from "ol/geom/Polygon";
import MultiPolygon from "ol/geom/MultiPolygon";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import LinearRing from "ol/geom/LinearRing";
import MultiPoint from "ol/geom/MultiPoint";
import MultiLineString from "ol/geom/MultiLineString";
import GeometryCollection from "ol/geom/GeometryCollection";
import { getArea } from "ol/sphere";
import GeoJSON from "ol/format/GeoJSON";
import OL3Parser from "jsts/org/locationtech/jts/io/OL3Parser";
import { UnaryUnionOp } from "jsts/org/locationtech/jts/operation/union";

/**
 * Validate geometry
 * @param {import("ol/geom/Geometry").default} geometry - OpenLayers geometry
 * @returns {boolean} - True if valid, false otherwise
 */
function validateGeometry(geometry) {
  if (!geometry) return false;
  
  const type = geometry.getType();
  
  if (type === 'Polygon') {
    const coords = geometry.getCoordinates();
    // Check if we have valid rings with at least 4 points (closed)
    return coords && coords[0] && coords[0].length >= 4;
  }
  
  if (type === 'MultiPolygon') {
    const coords = geometry.getCoordinates();
    // Check each polygon in the multipolygon
    return coords && coords.every(poly => poly && poly[0] && poly[0].length >= 4);
  }
  
  if (type === 'LineString') {
    const coords = geometry.getCoordinates();
    // LineString needs at least 2 points
    return coords && coords.length >= 2;
  }
  
  if (type === 'MultiLineString') {
    const coords = geometry.getCoordinates();
    // Check each linestring
    return coords && coords.every(line => line && line.length >= 2);
  }
  
  // Points are always valid
  return true;
}

/**
 * Union features using JSTS
 * @param {Array<Feature>} features - Array of features to union
 * @param {VectorSource} source - Vector source to add the result to and remove original features from
 * @returns {Feature|null} - The union result as a feature, or null if operation fails
 */
export function unionFeatures(features, source) {
  if (!features || features.length < 2) {
    showPopupMessage("Select at least two features to union", "warning");
    return null;
  }

  try {
    console.log("Starting union operation with features:", features);
    
    // Create a JSTS parser
    const parser = new OL3Parser();
    parser.inject(
      Point,
      LineString,
      LinearRing,
      Polygon,
      MultiPoint,
      MultiLineString,
      MultiPolygon,
      GeometryCollection
    );
    
    // Filter and convert valid features to JSTS geometries
    const jstsGeometries = [];
    for (const feature of features) {
      const geometry = feature.getGeometry();
      
      // Validate geometry before conversion
      if (!validateGeometry(geometry)) {
        console.warn("Invalid geometry, skipping:", geometry);
        continue;
      }
      
      try {
        const jstsGeom = parser.read(geometry);
        jstsGeometries.push(jstsGeom);
        console.log("Converted geometry:", jstsGeom);
      } catch (error) {
        console.error("Error converting geometry:", error);
      }
    }
    
    if (jstsGeometries.length < 2) {
      showPopupMessage("Not enough valid geometries to union", "warning");
      return null;
    }
    
    console.log("JSTS geometries for union:", jstsGeometries);
    
    // Use UnaryUnionOp for a more robust union
    const unionGeometry = UnaryUnionOp.union(jstsGeometries);
    console.log("Union result:", unionGeometry);
    
    if (!unionGeometry) {
      showPopupMessage("Union operation failed", "error");
      return null;
    }
    
    // Convert back to OpenLayers geometry
    const olGeometry = parser.write(unionGeometry);
    console.log("Converted back to OL geometry:", olGeometry);
    
    // Create a new feature with the union geometry
    const unionFeature = new Feature({
      geometry: olGeometry
    });
    
    // Remove original features and add the union result
    if (source) {
      features.forEach(feature => {
        source.removeFeature(feature);
      });
      source.addFeature(unionFeature);
    }
    
    showPopupMessage("Union operation completed successfully", "success");
    return unionFeature;
  } catch (error) {
    console.error("Error in unionFeatures:", error);
    showPopupMessage("Union operation failed: " + error.message, "error");
    return null;
  }
}
