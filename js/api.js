const API_KEY = "9d7eafa7";
    const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;


 export async function searchMovies(query, year = null) {

    let url = `${BASE_URL}s=${encodeURIComponent(query)}`;

    if (year) {
        url += `&y=${year}`;
    }

    const response = await fetch(url);

    return await response.json();
}


export async function getMovieDetails(imdbID) {

    const response = await fetch(
        `${BASE_URL}i=${imdbID}`
    );

    const data = await response.json();


    return data;
}