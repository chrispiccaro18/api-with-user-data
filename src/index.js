import loadGallery from './components/card-component.js';
import updateSearchTerm from './components/search-component.js';
import makeSearchURL from './api/make-search-url.js';
import { readHashQuery } from './api/hash-query.js';
import { updatePagingInfo } from './components/paging-component.js';
import { auth } from './firebase.js';
import loadHeader from './shared/header-component.js';

const promptSection = document.getElementById('prompt-section');
const pagingSection = document.getElementById('paging-section');
const listSection = document.getElementById('list-section');

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = 'auth.html';
        return;
    }
    loadHeader(user);
});

loadQuery();

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readHashQuery(existingQuery);
    updateSearchTerm(searchOptions);
    const url = makeSearchURL(searchOptions);
    if(!url) {
        promptSection.classList.remove('hidden');
        pagingSection.classList.add('hidden');
        listSection.classList.add('hidden');
        return;
    } else {
        promptSection.classList.add('hidden');
        pagingSection.classList.remove('hidden');
        listSection.classList.remove('hidden');
        fetch(url)
            .then(response => response.json())
            .then(result => {
                loadGallery(result.collection.items);
                updatePagingInfo(result.collection.metadata);
            });
    }
}