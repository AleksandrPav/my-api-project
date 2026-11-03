
import { state } from "./state.js";

export function clearResults() {
    const box = document.getElementById("results");
    box.innerHTML = "";
}

export function addMovieCard(movie) {

    const box = document.getElementById("results");

    const poster =
        movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "./img/no-poster.png";

    const genre =
        movie.Genre?.split(",")[0]?.trim() || "Unknown";

    const rating =
        movie.imdbRating && movie.imdbRating !== "N/A"
            ? movie.imdbRating
            : "—";

    box.innerHTML += `
        <div class="card">

            <div class="poster-wrapper">

                <img
                    src="${poster}"
                    alt="${movie.Title}"
                    loading="lazy"
                >

                <div class="rating-badge">
                    ⭐ ${rating}
                </div>

            </div>

            <div class="card-content">

                <h3 class="movie-title">
                    ${movie.Title}
                </h3>

                <p class="movie-info">
                    ${genre} • ${movie.Year}
                </p>

            </div>

        </div>
    `;
}

export function renderMovies() {

    clearResults();

    state.movies
        .slice(0, state.visibleMovies)
        .forEach(movie => addMovieCard(movie));

}