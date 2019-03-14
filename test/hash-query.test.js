const test = QUnit.test;

QUnit.module('hash function test');

function transformSearchToHash(existingQuery, queryOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', queryOptions.searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

function transformPageToHash(existingQuery, queryOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', queryOptions.page);
    return searchParams.toString();
}

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
    const queryOptions = {
        searchTerm: 'mars',
        page: 2
    };
    const existingQuery = 'search=mars&page=1';
    const expected = 'search=mars&page=2';
    //act
    const result = transformPageToHash(existingQuery, queryOptions);  
    //assert
    assert.equal(result, expected);
});

function readHashQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    return {
        searchTerm: searchParams.get('search'),
        page: Number(searchParams.get('page'))
    };
}

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