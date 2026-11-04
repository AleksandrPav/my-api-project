const TMDB_API_KEY = "8251c36fd36cc1842eb07df64561558d";

export async function searchMovie(title) {

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`
    );

    return await response.json();
}

export async function getMovieTrailer(title) {

    const searchData =
        await searchMovie(title);

    if (!searchData.results.length) {
        return null;
    }

    const movieId =
        searchData.results[0].id;

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
    );

    const data =
        await response.json();

    const trailer =
        data.results.find(
            video =>
                video.site === "YouTube" &&
                video.type === "Trailer"
        );

    return trailer
        ? trailer.key
        : null;
}