import user from '../../data/user.js';
import { constructHeader, constructProfile } from '../../src/shared/header-component.js';

const test = QUnit.test;

QUnit.module('Header constructor');

test('make header', assert => {
    //arrange
    const expected = /*html*/ `
        <header>
            <h1>HELLA SPACE</h1>
        </header>
    `;
    //act
    const result = constructHeader();

    //assert
    assert.htmlEqual(result, expected);
});

test('make profile header thing', assert => {
    //arrange
    const expected = /*html*/ `
        <section id="user-display-section">
            <img src="https://lh6.googleusercontent.com/-B34fgdKTs9E/AAAAAAAAAAI/AAAAAAAAAKY/VLtajeGSgQQ/photo.jpg" alt="Avatar of Chris Piccaro">
            <p>Chris Piccaro</p>
            <button id="signout-button">Sign Out</button>
        </section>
    `;
    //act
    const result = constructProfile(user) ;
    //assert
    assert.htmlEqual(result, expected);
});

test('user has no photo url', assert => {
    //arrange
    const user2 = {
        'uid':'105235896145754556417', 
        'displayName':'Chris Piccaro',
        'email':'chrispiccaro18@gmail.com'
    };
    const expected = /*html*/ `
        <section id="user-display-section">
            <img src="./assets/avatar-placeholder.png" alt="Avatar of Chris Piccaro">
            <p>Chris Piccaro</p>
            <button id="signout-button">Sign Out</button>
        </section>
    `;
    //act
    const result = constructProfile(user2);
    //assert
    assert.htmlEqual(result, expected);
});