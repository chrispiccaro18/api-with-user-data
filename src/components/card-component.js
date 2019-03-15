import { auth, favoritesByUserRef } from '../firebase.js';

export function constructCard(item) {
    const html = /*html*/ `
        <li>
            <span id="favorite-bell">🔔</span>
            <h2>${item.title}</h2>
            <img src="${item.href}" alt="Image of ${item.title}">
            <p>${item.description}</p>
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
        let apiData = item;
        if(item.data[0]) {
            apiData = item.data[0];
        }
        const dom = constructCard(apiData, item.links[0].href);
        const favoriteBell = dom.querySelector('#favorite-bell');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteImagesRef = userFavoritesRef.child(item.data[0].nasa_id);
        userFavoriteImagesRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }
                function addFavorite() {
                    isFavorite = true;
                    favoriteBell.textContent = '␇';
                    favoriteBell.classList.add('favorite');
                }
                function removeFavorite() {
                    isFavorite = false;
                    favoriteBell.textContent = '🔔';
                    favoriteBell.classList.remove('favorite');
                }

                favoriteBell.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteImagesRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteImagesRef.set({
                            id: item.data[0].nasa_id,
                            title: item.data[0].title,
                            date: item.data[0].date_created
                        });
                        addFavorite();
                    }
                });
            });
        cardList.appendChild(dom);
    });
}

function clearGallery() {
    while(cardList.children.length > 0) {
        cardList.lastElementChild.remove();
    }
}
