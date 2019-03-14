import makeSearchURL from '../src/make-search-url.js';

const test = QUnit.test;
QUnit.module('make url for fetch');

test('make search url for fetch test', assert => {
    //arrange
    const expected = 'https://images-api.nasa.gov/search?q=orbit&media_type=image&page=3';
    const searchOptions = {
        searchTerm: 'orbit',
        page: 3
    };
    //act
    const result = makeSearchURL(searchOptions);
    //asert
    assert.equal(result, expected);
});