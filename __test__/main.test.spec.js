const { buildingList, buildingFilter } = require('../1-algorithm/main');

describe('JS test for a list of buildings', () => {

    test('Empty array', () => {
        const results = buildingFilter(buildingList, 2020, 8000);
        expect(results.length).toBe(0);
    });
    
    test('One building found', () => {
        const results = buildingFilter(buildingList, 1940, 5240);
        expect(results.length).toBe(1);
    });
    
    test('Two buildings found', () => {
        const results = buildingFilter(buildingList, 1999, 6000);
        expect(results.length).toBe(2);
        expect(results[0]).toBe('34 Rowland Center');
        expect(results[1]).toBe('266 Sundown Pass');
    });
    
    test('Four buildings found', () => {
        const results = buildingFilter(buildingList, 1962, 2000);
        expect(results.length).toBe(4);
    });
    
    test('The result contains the correct names', () => {
        const results = buildingFilter(buildingList, 1950, 1500);
        expect(results.length).toBe(3);
        expect(results[0]).toBe('34 Rowland Center');
        expect(results[1]).toBe('71 Annamark Avenue');
        expect(results[2]).toBe('2 Hayes Court');
    });    
    
});