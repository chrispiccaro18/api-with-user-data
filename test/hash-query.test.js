const test = QUnit.test;

import { transformPageToHash, readHashQuery, transformSearchToHash } from '../src/hash-query.js';

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
        page: 2
    };
    //act
    const result = readHashQuery(existingQuery);

    //assert
    assert.deepEqual(result, expected);
});