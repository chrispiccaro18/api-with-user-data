import loadHeader from '../shared/header-component.js';
import { auth, favoritesByUserRef } from '../firebase.js';
import loadGallery from '../components/card-component.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.once('value')
        .then(snapshot => {
            const favoriteImagesAsObject = snapshot.val();
            console.log(favoriteImagesAsObject);
        });
});