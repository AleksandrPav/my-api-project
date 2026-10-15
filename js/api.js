export function searchMovies(query, year = null) {
    const API_KEY = "9d7eafa7";
    const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

    let url = `${BASE_URL}s=${query}`;
    if (year) url += `&y=${year}`;

    return fetch(url).then(res => res.json());
}