import OL3Parser from "jsts/org/locationtech/jts/io/OL3Parser";
import { UnaryUnionOp } from "jsts/org/locationtech/jts/operation/union";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import LinearRing from "ol/geom/LinearRing";
import Polygon from "ol/geom/Polygon";
import MultiPoint from "ol/geom/MultiPoint";
import MultiLineString from "ol/geom/MultiLineString";
import MultiPolygon from "ol/geom/MultiPolygon";
import GeometryCollection from "ol/geom/GeometryCollection";
import { showPopupMessage } from "./popup-message.js"; // Using your existing popup message utility

/**
 * Class to handle geometry operations like union, intersection, etc.
 */
export class GeometryOperations {
  constructor() {
    // Initialize JSTS parser
    this.parser = new OL3Parser();
    
    // Inject OpenLayers geometry classes
    this.parser.inject(
      Point,
      LineString,
      LinearRing,
      Polygon,
      MultiPoint,
      MultiLineString,
      MultiPolygon,
      GeometryCollection
    );
    
    console.log("GeometryOperations initialized with parser:", this.parser);
  }

  /**
   * Creates a union of multiple features
   * @param {Array<Feature>} features - Array of OpenLayers features
   * @returns {Feature|null} - The union result as an OpenLayers feature, or null if operation fails
   */
  unionFeatures(features) {
    console.log("unionFeatures called with:", features);
    
    if (!features || features.length === 0) {
      showPopupMessage("No features selected for union", "warning");
      return null;
    }

    if (features.length === 1) {
      showPopupMessage("Only one feature selected, no union needed", "info");
      return features[0].clone();
    }

    try {
      // Check if all features have valid geometries
      const validFeatures = features.filter(f => f.getGeometry() !== null && !f.getGeometry().isEmpty());
      
      if (validFeatures.length !== features.length) {
        console.warn("Some features have invalid geometries:", 
          features.filter(f => f.getGeometry() === null || f.getGeometry().isEmpty()));
        showPopupMessage("Some features have invalid geometries", "warning");
      }
      
      if (validFeatures.length < 2) {
        showPopupMessage("Not enough valid features for union", "warning");
        return null;
      }
      
      console.log("Valid features for union:", validFeatures);
      
      // Convert all OL geometries to JSTS geometries
      const jstsGeoms = [];
      for (const feature of validFeatures) {
        try {
          const jstsGeom = this.parser.read(feature.getGeometry());
          console.log("Converted geometry:", jstsGeom);
          jstsGeoms.push(jstsGeom);
        } catch (error) {
          console.error("Error converting geometry:", error, feature.getGeometry());
        }
      }
      
      if (jstsGeoms.length < 2) {
        showPopupMessage("Failed to convert geometries for union", "error");
        return null;
      }
      
      // Perform the union operation using UnaryUnionOp
      console.log("Performing union with geometries:", jstsGeoms);
      const unionGeom = UnaryUnionOp.union(jstsGeoms);
      console.log("Union result:", unionGeom);
      
      if (!unionGeom) {
        showPopupMessage("Union operation returned null", "error");
        return null;
      }
      
      // Convert back to OL geometry
      const olGeometry = this.parser.write(unionGeom);
      console.log("Converted back to OL geometry:", olGeometry);
      
      if (!olGeometry) {
        showPopupMessage("Failed to convert union result back to OpenLayers", "error");
        return null;
      }
      
      // Create a new feature with the union geometry
      const unionFeature = new Feature({
        geometry: olGeometry
      });
      
      // Copy properties from the first feature (optional)
      const properties = validFeatures[0].getProperties();
      delete properties.geometry; // Remove geometry property
      unionFeature.setProperties(properties);
      
      showPopupMessage("Union operation completed successfully", "success");
      return unionFeature;
    } catch (error) {
      console.error("Error performing union:", error);
      showPopupMessage("Failed to create union: " + error.message, "error");
      return null;
    }
  }
}

// Create and export a singleton instance
export const geometryOps = new GeometryOperations();
