const { TestScheduler } = require('jest');
const fixtures = require('./fixtures');
const regions = [ 'on', 'ab', 'bc', 'nl', 'pe', 'ns', 'nb', 'qc', 'mb', 'sk', 'yt', 'nt', 'nu' ];
const canada = require('../dist');

regions.forEach(region => {
  const fn = canada[region];

  describe(`${region}`, () => {
    test(`canada.${region} should be a function`, () => expect(typeof fn).toBe('function'));

    Object.keys(fixtures).forEach(fixtureRegion => {
      const fixture = fixtures[fixtureRegion];

      test(`${region} with ${fixture.city} (${fixtureRegion})`, () => {
        const [lat, lng] = fixture.loc;
        const cityShouldBeInRegion = region === fixtureRegion;
        
        expect(fn(lat, lng)).toEqual(cityShouldBeInRegion);
      });
    });
  });
});
