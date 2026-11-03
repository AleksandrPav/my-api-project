import { searchMovies,  getMovieDetails } from "./api.js"
import { keywords } from "./movies.js";
import { state } from "./state.js";
import { renderMovies } from "./render.js";
import { updateButton } from "./loadMore.js";
export async function loadNewReleases(year) {

    const box = document.getElementById("results");
    box.innerHTML = "<p>Завантаження новинок...</p>";

    const results = await Promise.all(
        keywords.map(word => searchMovies(word, year))
    );

    const movies = [];

    results.forEach(data => {

        if (data.Search) {
            movies.push(...data.Search);
        }

    });

    const uniqueMovies = [
        ...new Map(
            movies.map(movie => [movie.imdbID, movie])
        ).values()
    ];

    const detailedMovies = await Promise.all(
        uniqueMovies.map(movie =>
            getMovieDetails(movie.imdbID)
        )
    );


    state.movies = detailedMovies.filter(
    movie => movie && movie.Response === "True"
);


    renderMovies();

updateButton();
}

