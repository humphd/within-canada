import checkPoint from '../check-point';
import geojson from '../../data/CA-NS.json';

export default (lat, lng) => checkPoint(lat, lng, geojson);
