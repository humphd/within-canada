import checkPoint from '../check-point';
import geojson from '../../data/CA-NB.json';

export default (lat, lng) => checkPoint(lat, lng, geojson);
