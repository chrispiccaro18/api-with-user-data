const test = QUnit.test;

QUnit.module('Convert object to array');

function convertObjectToArray(object) {
    const keys = Object.keys(object);
    return keys.map(key => object[key]);
}

test('given an object array', assert => {
    //arrange
    const expected = [{ thing: 12 }, { thing2: 1 }, { 22: 'ddd' }];

    const object = {
        0: { thing: 12 },
        1: { thing2: 1 },
        2: { 22: 'ddd' }
    };
    //act
    const result = convertObjectToArray(object);
    //assert
    assert.deepEqual(result, expected);
});