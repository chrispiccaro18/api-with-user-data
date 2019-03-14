export function transformSearchToHash(existingQuery, queryOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', queryOptions.searchTerm);
    if(queryOptions.startYear) {
        searchParams.set('start_year', queryOptions.startYear);
    }
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function transformPageToHash(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readHashQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    return {
        searchTerm: searchParams.get('search'),
        startYear: Number(searchParams.get('start_year')),
        page: Number(searchParams.get('page'))
    };
}