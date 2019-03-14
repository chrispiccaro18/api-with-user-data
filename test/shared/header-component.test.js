import user from '../../data/user.js';
import { constructHeader } from '../../src/shared/header-component.js';

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

function constructProfile(user) {
    const html = /*html*/ `
        <section id="user-display-section">
            <img src="${user.photoURL}" alt="Avatar of ${user.displayName}">
            <p>${user.displayName}</p>
            <button id="signout-button">Sign Out</button>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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