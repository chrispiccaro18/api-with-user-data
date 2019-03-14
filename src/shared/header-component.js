import { auth } from '../firebase.js';

export function constructHeader() {
    const html = /*html*/ `
        <header>
            <h1>HELLA SPACE</h1> 
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function constructProfile(user) {
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

const headerDiv = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = constructHeader();
    const header = dom.querySelector('header');
    headerDiv.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = constructProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location = 'auth.html';
            });
            header.appendChild(userDom);
        }
    });
}