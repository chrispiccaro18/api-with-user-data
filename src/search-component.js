const searchForm = document.getElementById('search-form');
const searchTermInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    console.log(searchTerm);
});