import loadGallery from './card-component.js';
import updateSearchTerm from './search-component.js';
import makeSearchURL from './make-search-url.js';
import { readHashQuery } from './hash-query.js';
 
window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readHashQuery(existingQuery);
    updateSearchTerm(searchOptions.searchTerm);
    const url = makeSearchURL(searchOptions);
    fetch(url)
        .then(response => response.json())
        .then(result => {
            loadGallery(result.collection.items);
        });
});