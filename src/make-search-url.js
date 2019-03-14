const BASE_URL = 'https://images-api.nasa.gov/search';

export default function makeSearchURL(searchOptions) {
    if(!searchOptions.searchTerm) {
        return '';
    }
    const url = new URL(BASE_URL);
    url.searchParams.set('q', searchOptions.searchTerm);
    url.searchParams.set('media_type', 'image');
    if(searchOptions.startYear) {
        url.searchParams.set('year_start', searchOptions.startYear);
    }
    url.searchParams.set('page', searchOptions.page);
    return url.toString();
}