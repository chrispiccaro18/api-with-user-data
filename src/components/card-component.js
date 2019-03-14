export function constructCard(item) {
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

const cardList = document.getElementById('card-list');

export default function loadGallery(items) {
    clearGallery();
    items.forEach(item => {
        const dom = constructCard(item);
        cardList.appendChild(dom);
    });
}

function clearGallery() {
    while(cardList.children.length > 0) {
        cardList.lastElementChild.remove();
    }
}
