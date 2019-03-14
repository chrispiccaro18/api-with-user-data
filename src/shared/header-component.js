export function constructHeader(user){
    const html = /*html*/ `
        <header>
            <h1>HELLA SPACE</h1>
            <section id="user-display-section">
                <img src="${user.photoURL}" alt="Avatar of ${user.displayName}">
                <p>${user.displayName}</p>
                <button id="signout-button">Sign Out</button>
            </section>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}