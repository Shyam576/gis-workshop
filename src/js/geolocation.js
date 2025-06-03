import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Point from 'ol/geom/Point.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import Circle from 'ol/geom/Circle';


export function current_location(view) {
  console.log("Initializing geolocation");
  
  // Check if geolocation is supported
  if (!navigator.geolocation) {
    return Promise.reject(new Error("Geolocation is not supported by this browser"));
  }
  
  const geolocation = new Geolocation({
    trackingOptions: {
      enableHighAccuracy: true,
      timeout: 15000, // Increase timeout to 15 seconds
      maximumAge: 0    // Don't use cached position
    },
    projection: view.getProjection(),
  });

  geolocation.setTracking(true);

  const accuracyFeature = new Feature();
  const positionFeature = new Feature();

  positionFeature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({ color: '#3399CC' }),
        stroke: new Stroke({ color: '#fff', width: 2 }),
      }),
    })
  );

  accuracyFeature.setStyle(
    new Style({
      fill: new Fill({ color: 'rgba(0, 0, 255, 0.2)' })
    })
  );

  const locationLayer = new VectorLayer({
    source: new VectorSource({
      features: [accuracyFeature, positionFeature],
    }),
    title: "location-layer"
  });

  return new Promise((resolve, reject) => {
    // Add error handler
    geolocation.on('error', function(error) {
      console.error('Geolocation error:', error);
      
      // Show user-friendly error message based on error code
      if (error.code === 1) {
        reject(new Error("Location permission denied. Please allow location access in your browser settings."));
      } else if (error.code === 2) {
        reject(new Error("Location unavailable. Please try again or check your device settings."));
      } else if (error.code === 3) {
        reject(new Error("Location request timed out. Please try again with better signal."));
      } else {
        reject(error);
      }
    });
    
    const onPositionChange = () => {
      console.log("Position changed");
      const coordinates = geolocation.getPosition();
      if (coordinates) {
        console.log("Got coordinates:", coordinates);
        const point = new Point(coordinates);
        let accuracyGeom = geolocation.getAccuracyGeometry();

        if (!accuracyGeom) {
          console.log("No accuracy geometry, creating default circle");
          const circle = new Circle(coordinates, 100);
          accuracyGeom = circle;
        }
        accuracyFeature.setGeometry(accuracyGeom);
        positionFeature.setGeometry(point);
        view.fit(point.getExtent(), { maxZoom: 15, duration: 220 });

        // Clear timeout since we got a position
        clearTimeout(timeoutId);
        
        geolocation.un('change:position', onPositionChange); 
        resolve({
          layer: locationLayer,
          pointFeature: positionFeature
        });
      } else {
        console.log("No coordinates available yet");
      }
    };

    // Set a timeout to reject if no position is received
    const timeoutId = setTimeout(() => {
      if (!geolocation.getPosition()) {
        geolocation.un('change:position', onPositionChange);
        reject(new Error("Geolocation timeout - no position received. Please check your browser location permissions."));
      }
    }, 15000); // Increased to 15 seconds

    geolocation.on('change:position', onPositionChange);
    
    // Check if position is already available
    if (geolocation.getPosition()) {
      console.log("Position already available");
      onPositionChange();
    }
  });
}
