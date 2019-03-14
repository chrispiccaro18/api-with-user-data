import loadGallery from './card-component.js';
import data from '../data/items.js';
import updateSearchTerm from './search-component.js';
import makeSearchURL from './make-search-url.js';
 
window.addEventListener('hashchange', () => {
    const searchOptions = window.location.hash.slice(1);
    const url = makeSearchURL(searchOptions);
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.items);
        });
});
loadGallery(data);

