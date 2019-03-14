import { transformPageToHash } from '../api/hash-query.js';

const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPage = document.getElementById('total-pages');

//we want url to bw source of truth
//have buttons update url 

let currentPageCount = 1;

export function updatePagingInfo(metadata) {
    const totalPageCount = Math.ceil(parseInt(metadata.total_hits) / 100);
    currentPage.textContent = currentPageCount;
    totalPage.textContent = totalPageCount;
    nextButton.disabled = currentPageCount === totalPageCount;
    previousButton.disabled = currentPageCount === 1;
}

nextButton.addEventListener('click', () => {
    currentPageCount++;
    updateQuery();
});

previousButton.addEventListener('click', () => {
    currentPageCount--;
    updateQuery();
});

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = transformPageToHash(existingQuery, currentPageCount);
    window.location.hash = newQuery;
}

