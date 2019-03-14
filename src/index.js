import loadGallery from './card-component.js';
import updateSearchTerm from './search-component.js';
import makeSearchURL from './make-search-url.js';
import { readHashQuery } from './hash-query.js';
import { updatePagingInfo } from './paging-component.js';

const promptSection = document.getElementById('prompt-section');
const pagingSection = document.getElementById('paging-section');
const listSection = document.getElementById('list-section');

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readHashQuery(existingQuery);
    updateSearchTerm(searchOptions.searchTerm);
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
});