const BASE_URL = 'https://images-api.nasa.gov/search';

export default function makeSearchURL(searchOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('q', searchOptions.searchTerm);
    url.searchParams.set('media_type', 'image');
    url.searchParams.set('page', 3);
    return url.toString();
}