import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { point } from '@turf/helpers';
import { getGeom } from '@turf/invariant';

export default (lat, lng, geojson) => 
  booleanPointInPolygon(point([lng, lat]), getGeom(geojson));
