import { auth } from '../firebase.js';

export function constructHeader(user){
    const html = /*html*/ `
        <header>
            <h1>HELLA SPACE</h1> 
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerDiv = document.getElementById('header-container');

export default function loadHeader(user) {
    const dom = constructHeader(user);
    headerDiv.appendChild(dom);
}