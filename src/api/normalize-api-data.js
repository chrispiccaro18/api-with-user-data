export function normalizeApiData(apiData) {
    const headerKeys = Object.keys(apiData);
    const obj = {};
    for(let i = 0; i < headerKeys.length; i++) {
        let keys = Object.keys(apiData[headerKeys[i]][0]);
        let values = Object.values(apiData[headerKeys[i]][0]);
        keys.forEach((key, i) => {
            obj[key] = values[i] ;
        });
    }
    return obj;
}