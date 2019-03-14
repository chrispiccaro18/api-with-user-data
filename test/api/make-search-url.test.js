import makeSearchURL from '../../src/api/make-search-url.js';

const test = QUnit.test;
QUnit.module('make url for fetch');

test('make search url for fetch test', assert => {
    //arrange
    const expected = 'https://images-api.nasa.gov/search?q=orbit&media_type=image&page=3';
    const searchOptions = {
        searchTerm: 'orbit',
        page: 3,
        startYear: 0
    };
    //act
    const result = makeSearchURL(searchOptions);
    //asert
    assert.equal(result, expected);
});

test('return empty string if no searchTerm', assert => {
    //arrange
    const expected = '';
    const searchOptions = {
        searchTerm: '',
        page: 3
    };
    //act
    const result = makeSearchURL(searchOptions);
    //asert
    assert.equal(result, expected);
});

test('return empty string if no searchTerm', assert => {
    //arrange
    const expected = 'https://images-api.nasa.gov/search?q=lunar&media_type=image&year_start=1970&page=3';
    const searchOptions = {
        searchTerm: 'lunar',
        page: 3,
        startYear: 1970
    };
    //act
    const result = makeSearchURL(searchOptions);
    //asert
    assert.equal(result, expected);
});