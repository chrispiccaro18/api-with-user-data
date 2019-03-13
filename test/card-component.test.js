import item from '../data/item.js';

const test = QUnit.test;

QUnit.module('Card constructor');

function constructCard(item) {
    const html = /*html*/ `
        <li>
            <h2>${item.data[0].title}</h2>
            <img src="${item.links[0].href}" alt="Image of ${item.data[0].title}">
            <p>${item.data[0].description}</p>
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
            <h2>Orbital ATK CRS-7 Liftoff</h2>
            <img src="https://images-assets.nasa.gov/image/KSC-20170418-PH_AWG06_0015/KSC-20170418-PH_AWG06_0015~thumb.jpg"
            alt="Image of Orbital ATK CRS-7 Liftoff">
            <p>With blue sky for a background, the Orbital ATK Cygnus pressurized cargo module is carried atop the United Launch Alliance Atlas V rocket from Space Launch Complex 41 at Cape Canaveral Air Force Station in Florida. Orbital ATK\'s seventh commercial resupply services mission, CRS-7, will deliver 7,600 pounds of supplies, equipment and scientific research materials to the International Space Station. Liftoff was at 11:11 a.m. EDT. </p>
        </li>
    `;

    // act
    const result = constructCard(item);

    // assert
    assert.htmlEqual(result, expected);
});