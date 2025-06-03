import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Stroke, Icon } from 'ol/style';

export function createFlightRouteLayer(destinationLonLat, view) {
  const pune = fromLonLat([73.8567, 18.5204]);
  const dest = fromLonLat(destinationLonLat);
  const dagana = fromLonLat([73.8567, 23.5204]);

  // Create a LineString with all points for the straight line visualization
  const route = new LineString([pune, dest, dagana, pune]);
  const routeFeature = new Feature(route);

  const source = new VectorSource();

  const layer = new VectorLayer({
    source,
    style: function (feature) {
      const geometry = feature.getGeometry();
      if (geometry instanceof Point) {
        return new Style({
          image: new Icon({
            src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            scale: 0.05,
          }),
        });
      }
      return new Style({
        stroke: new Stroke({
          color: 'rgba(0, 153, 255, 0.8)',
          width: 5,
          lineDash: [10, 10],
        }),
      });
    },
    title: 'flight-layer',
  });

  if (view) {
    view.fit(route.getExtent(), { padding: [50, 50, 50, 50], duration: 1000 });
  }

  // Create great circle arcs for each segment of the journey
  const features = [];
  
  // Pune to Destination
  const arc1 = new window.arc.GreatCircle(
    { x: 73.8567, y: 18.5204 },
    { x: destinationLonLat[0], y: destinationLonLat[1] }
  );
  const arcLine1 = arc1.Arc(100, { offset: 10 });
  
  // Destination to Dagana
  const arc2 = new window.arc.GreatCircle(
    { x: destinationLonLat[0], y: destinationLonLat[1] },
    { x: 73.8567, y:23.5204 }
  );
  const arcLine2 = arc2.Arc(100, { offset: 10 });
  
  // Dagana to Pune
  const arc3 = new window.arc.GreatCircle(
    { x: 73.8567, y:23.52044 },
    { x: 73.8567, y: 18.5204 }
  );
  const arcLine3 = arc3.Arc(100, { offset: 10 });

  // Process all arc segments
  [arcLine1, arcLine2, arcLine3].forEach(arcLine => {
    arcLine.geometries.forEach((geometry) => {
      const line = new LineString(geometry.coords);
      line.transform('EPSG:4326', 'EPSG:3857');
      features.push(new Feature({ geometry: line }));
    });
  });

  // Add marker for Pune
  const puneMarker = new Feature({
    geometry: new Point(pune),
  });

  // Add marker for Destination
  const destMarker = new Feature({
    geometry: new Point(dest),
  });

  // Add marker for Dagana
  const daganaMarker = new Feature({
    geometry: new Point(dagana),
  });

  features.push(puneMarker, destMarker, daganaMarker);

  source.addFeatures(features);

  return layer;
}
