import { auth, favoritesByUserRef } from '../firebase.js';
import { normalizeApiData } from '../api/normalize-api-data.js';

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
        let itemData = item;
        console.log(item);
        if(item.data) {
            itemData = normalizeApiData(item);
            console.log(itemData)
        }
        const dom = constructCard(itemData);
        const favoriteBell = dom.querySelector('#favorite-bell');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        console.log(itemData);
        const userFavoriteImagesRef = userFavoritesRef.child(itemData.nasa_id);
        console.log(userFavoriteImagesRef);
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
                            id: itemData.nasa_id,
                            title: itemData.title,
                            date: itemData.date_created,
                            href: itemData.href,
                            description: itemData.description,
                            nasa_id: itemData.nasa_id
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
