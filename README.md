# within-canada

Check if a Lat/Lng Coordinate is within the specified Canadian Province or Territory.

## Examples

```js
import canada from 'within-canada';

const toronto = { lat: 43.6532, lng: -79.3832 };
// Check for Toronto within Ontario (ON)
canada.on(toronto.lat, toronto.lng);
// true
```

However, it is much more space efficient to only request the function for the
province/territory you actually need:

```js
// get only the on() function (on its own)
import ontario from 'within-canada/on'

const toronto = { lat: 43.6532, lng: -79.3832 };
on(toronto.lat, toronto.lng);
// true
```

Each province/territory is available using the two character region code
listed below.

## API

The following functions are available, where `lat` and `lng` are of type `Number`:

- `on(lat, lng)` returns `true` if the point is within Ontario
- `ab(lat, lng)` returns `true` if the point is within Alberta
- `bc(lat, lng)` returns `true` if the point is within British Columbia
- `nl(lat, lng)` returns `true` if the point is within Newfoundland and Labrador
- `pe(lat, lng)` returns `true` if the point is within Prince Edward Island
- `ns(lat, lng)` returns `true` if the point is within Nova Scotia
- `nb(lat, lng)` returns `true` if the point is within New Brunswick
- `qc(lat, lng)` returns `true` if the point is within Québec
- `mb(lat, lng)` returns `true` if the point is within Manitoba
- `sk(lat, lng)` returns `true` if the point is within Saskatchewan
- `yt(lat, lng)` returns `true` if the point is within Yukon Territory
- `nt(lat, lng)` returns `true` if the point is within Northwest Territories
- `nu(lat, lng)` returns `true` if the point is within Nunavut
