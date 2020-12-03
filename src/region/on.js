import checkPoint from '../check-point';
import geojson from '../../data/CA-ON.json';

export default (lat, lng) => checkPoint(lat, lng, geojson);
