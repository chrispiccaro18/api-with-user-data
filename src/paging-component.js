import { transformPageToHash } from './hash-query.js';

const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPage = document.getElementById('total-pages');

//we want url to bw source of truth
//have buttons update url 

let currentPageCount = 1;

nextButton.addEventListener('click', () => {
    currentPageCount++;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = transformPageToHash(existingQuery, currentPageCount);
    window.location.hash = newQuery;
});