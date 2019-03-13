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