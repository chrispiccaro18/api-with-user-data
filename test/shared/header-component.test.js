import user from '../../data/user.js';
import { constructHeader } from '../../src/shared/header-component.js';

const test = QUnit.test;

QUnit.module('Header constructor');

test('make header', assert => {
    //arrange
    const expected = /*html*/ `
        <header>
            <h1>HELLA SPACE</h1>
            <section id="user-display-section">
                <img src="https://lh6.googleusercontent.com/-B34fgdKTs9E/AAAAAAAAAAI/AAAAAAAAAKY/VLtajeGSgQQ/photo.jpg" alt="Avatar of Chris Piccaro">
                <p>Chris Piccaro</p>
                <button id="signout-button">Sign Out</button>
            </section>
        </header>
    `;
    //act
    const result = constructHeader(user);

    //assert
    assert.htmlEqual(result, expected);
});