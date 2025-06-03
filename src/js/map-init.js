import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { fromLonLat} from 'ol/proj';

//initialize the map on the web
export function initMap(){
    const map = new Map({
        target: 'map',
        //in open layer each layers is a table
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            center: fromLonLat([89.638427, 27.478586000000004]),
            zoom: 2
        })
    });
    
    return map; // Make sure this return statement is here
}
