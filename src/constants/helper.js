export const fetchdata = async (url) => {
    return await fetch(url)
        .then((response) => response.json())
        .then((data) => data);
}