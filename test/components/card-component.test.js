import item from '../../data/item.js';
import { constructCard } from '../../src/components/card-component.js';

const test = QUnit.test;

QUnit.module('Card constructor');

test('make li for card list', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <span id="favorite-bell">🔔</span>
            <h2>Orbital ATK CRS-7 Liftoff</h2>
            <img src="https://images-assets.nasa.gov/image/KSC-20170418-PH_AWG06_0015/KSC-20170418-PH_AWG06_0015~thumb.jpg"
            alt="Image of Orbital ATK CRS-7 Liftoff">
            <p>With blue sky for a background, the Orbital ATK Cygnus pressurized cargo module is carried atop the United Launch Alliance Atlas V rocket from Space Launch Complex 41 at Cape Canaveral Air Force Station in Florida. Orbital ATK's seventh commercial resupply services mission, CRS-7, will deliver 7,600 pounds of supplies, equipment and scientific research materials to the International Space Station. Liftoff was at 11:11 a.m. EDT. </p>
        </li>
    `;

    // act
    const result = constructCard(item);

    // assert
    assert.htmlEqual(result, expected);
});