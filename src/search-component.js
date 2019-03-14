import { transformSearchToHash } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const searchTermInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const queryOptions = {
        searchTerm: searchTermInput.value
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = transformSearchToHash(existingQuery, queryOptions);
    window.location.hash = newQuery;
});

export default function updateSearchTerm(searchTerm) {
    searchTermInput.value = searchTerm;
}