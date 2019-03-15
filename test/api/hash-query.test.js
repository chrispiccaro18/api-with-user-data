import { transformPageToHash, readHashQuery, transformSearchToHash } from '../../src/api/hash-query.js';

const test = QUnit.test;

QUnit.module('hash function test');

test('writing searchterms and first page to a hash', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'mars'
    };
    const existingQuery = '';
    const expected = 'search=mars&page=1';
    //act
    const result = transformSearchToHash(existingQuery, queryOptions);
    //assert
    assert.equal(result, expected);
});

test('writing startyear and first page to a hash', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'mars',
        startYear: 1990
    };
    const existingQuery = '';
    const expected = 'search=mars&start_year=1990&page=1';
    //act
    const result = transformSearchToHash(existingQuery, queryOptions);
    //assert
    assert.equal(result, expected);
});

test('writing page to a hash', assert => {
    //arrange
    const page = 2;
    const existingQuery = 'search=mars&page=1';
    const expected = 'search=mars&page=2';
    //act
    const result = transformPageToHash(existingQuery, page);  
    //assert
    assert.equal(result, expected);
});

test('reading from hash to queryOptions', assert => {
    //arrange
    const existingQuery = 'search=mars&page=2';
    const expected = {
        searchTerm: 'mars',
        startYear: 0,
        page: 2
    };
    //act
    const result = readHashQuery(existingQuery);

    //assert
    assert.deepEqual(result, expected);
});

test('reading from hash to queryOptions with a start year', assert => {
    //arrange
    const existingQuery = 'search=mars&start_year=1991&page=3';
    const expected = {
        searchTerm: 'mars',
        startYear: 1991,
        page: 3
    };
    //act
    const result = readHashQuery(existingQuery);

    //assert
    assert.deepEqual(result, expected);
});