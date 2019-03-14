const config = {
    apiKey: 'AIzaSyARvVQjC3tnAJj77U01PO7rA5ccaIZspZo',
    authDomain: 'nasa-image-api-4cdae.firebaseapp.com',
    databaseURL: 'https://nasa-image-api-4cdae.firebaseio.com',
    projectId: 'nasa-image-api-4cdae',
    storageBucket: '',
    messagingSenderId: '674897675897'
};

firebase.initializeApp(config);

export const auth = firebase.auth();