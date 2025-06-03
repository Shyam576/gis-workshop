import OL3Parser from 'jsts/org/locationtech/jts/io/OL3Parser'
import { Feature } from 'ol';
import {
    BufferOp
} from 'jsts/org/locationtech/jts/operation/buffer'



import Point from 'ol/geom/Point.js';
import MultiPoint from 'ol/geom/MultiPoint.js';
import LineString from 'ol/geom/LineString.js';

import Polygon from 'ol/geom/Polygon.js';
import MultiPolygon from 'ol/geom/MultiPolygon.js';
import MultiLineString from 'ol/geom/MultiLineString';
import LinearRing  from 'ol/geom/LinearRing.js';

export function createBuffer(feature, bufferDistance ,layer){
    const parser = new OL3Parser();
    parser.inject(
        Point,
        LineString,
        LinearRing,
        Polygon,
        MultiPoint,
        MultiLineString,
        MultiPolygon
    )


    const jstsGeom = parser.read(feature.getGeometry());
    var buffered = BufferOp.bufferOp(jstsGeom, parseInt(bufferDistance));
    const geom = parser.write(buffered);
    var geom_buffer_feat = new Feature(geom);
    console.log("Geom: ",geom)
    layer.getSource().addFeature(geom_buffer_feat);
}
    