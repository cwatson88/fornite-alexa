import * as weather from '../src/stats';

describe('axios is fetching content', () => {
  test('get weather', () => {
    expect(weather.axiosTest).toEqual(expect.any(Object));
  });
});
