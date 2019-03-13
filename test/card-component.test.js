const test = QUnit.test;

QUnit.module('Card constructor');

function constructCard(){
    const html = /*html*/ `
        <li>
            <h2>LROC First Look at the Apollo Landing Sites</h2>
            <img src="https://images-assets.nasa.gov/image/PIA12889/PIA12889~thumb.jpg" alt="Image of LROC First Look at the Apollo Landing Sites">
            <p>NASA Lunar Reconnaissance Orbiter first look at the Apollo landing sites.</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make li for card list', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <h2>LROC First Look at the Apollo Landing Sites</h2>
            <img src="https://images-assets.nasa.gov/image/PIA12889/PIA12889~thumb.jpg" alt="Image of LROC First Look at the Apollo Landing Sites">
            <p>NASA Lunar Reconnaissance Orbiter first look at the Apollo landing sites.</p>
        </li>
    `;

    // act
    const result = constructCard();

    // assert
    assert.htmlEqual(result, expected);
});