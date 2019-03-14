import { auth } from '../firebase.js';
import loadHeader from '../shared/header-component.js';

const options = {
    skipAuth: true
};

loadHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: './' + window.location.hash,
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
});