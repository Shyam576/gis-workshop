import { altKeyOnly, click, pointerMove } from 'ol/events/condition.js';
import Select from 'ol/interaction/Select.js';
import VectorLayer from 'ol/layer/Vector.js';
import { disable } from 'ol/rotationconstraint';
import VectorSource from 'ol/source/Vector.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';


export function activateSelectInteraction(map) {
    const selected = new Style({
        fill: new Fill({
            color: '#eeeeee',
        }),
        stroke: new Stroke({
            color: 'rgba(255, 255, 255, 0.7)',
            width: 2,
        }),
    });

    function selectStyle(feature) {
        const color = feature.get('COLOR') || '#eeeeee';
        selected.getFill().setColor(color);
        return selected;
    };

    const selectAltClick = new Select({
        style: selectStyle,
        condition: function (event) {
            return click(event) && altKeyOnly(event);
        },
        toggleCondition: function (event) {
            return click(event) && altKeyOnly(event);
        },
        multi: true
    });

    map.addInteraction(selectAltClick);
    return {
        features: selectAltClick.getFeatures(),
        disable: () => {
            map.removeInteraction();
        }
    }
}
