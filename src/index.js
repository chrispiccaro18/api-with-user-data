import loadGallery from './card-component.js';
import data from '../data/items.js';
import updateSearchTerm from './search-component.js';
 
window.addEventListener('hashchange', updateSearchTerm);
loadGallery(data);
 