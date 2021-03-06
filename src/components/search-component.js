import { transformSearchToHash } from '../api/hash-query.js';

const searchForm = document.getElementById('search-form');
const searchTermInput = document.getElementById('search');
const startYearInput = document.getElementById('start-year');

const searchTermStartYear = searchForm.querySelectorAll('input');

searchForm.addEventListener('submit', event => {
    const searchTerm = searchTermStartYear[0].value;
    const startYear = searchTermStartYear[1].value;
    event.preventDefault();
    const queryOptions = {
        searchTerm: searchTerm,
        startYear: Number(startYear)
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = transformSearchToHash(existingQuery, queryOptions);
    window.location.hash = newQuery;
});

export default function updateSearchTerm(searchOptions) {
    searchTermInput.value = searchOptions.searchTerm;
    startYearInput.value = searchOptions.startYear;
}