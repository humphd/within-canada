import checkPoint from '../check-point';
import geojson from '../../data/CA-NU.json';

export default (lat, lng) => checkPoint(lat, lng, geojson);
