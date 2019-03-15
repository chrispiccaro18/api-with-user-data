const config = {
    apiKey: 'AIzaSyARvVQjC3tnAJj77U01PO7rA5ccaIZspZo',
    authDomain: 'nasa-image-api-4cdae.firebaseapp.com',
    databaseURL: 'https://nasa-image-api-4cdae.firebaseio.com',
    projectId: 'nasa-image-api-4cdae',
    storageBucket: 'nasa-image-api-4cdae.appspot.com',
    messagingSenderId: '674897675897'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

export const usersRef = db.ref('users');

export const favoritesByUserRef = db.ref('favorites-by-user');