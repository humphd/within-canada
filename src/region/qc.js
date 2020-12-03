import checkPoint from '../check-point';
import geojson from '../../data/CA-QC.json';

export default (lat, lng) => checkPoint(lat, lng, geojson);
