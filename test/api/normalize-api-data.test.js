import { normalizeApiData } from '../../src/api/normalize-api-data.js';

const test = QUnit.test;

QUnit.module('Converting API data to flattened structure');

test('given api data return single array', assert => {
    //arrange
    const apiData = {
        "href": "sdfsdfds",
        "data": [
            {
                "photographer": 'person',
                "tile": 'title of image'
            }
        ],
        "links": [
            {
                "href": 'src'
            }
        ]
    };
    const expected = {
        "photographer": 'person',
        "tile": 'title of image',
        "href": 'src'
    };
    //act
    const result = normalizeApiData(apiData);
    //assert

    assert.deepEqual(result, expected);
});