import { auth, favoritesByUserRef } from '../firebase.js';

export function constructCard(item) {
    const html = /*html*/ `
        <li>
            <span id="favorite-bell">🔔</span>
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
                            // photographer: item.data[0].photographer,
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
