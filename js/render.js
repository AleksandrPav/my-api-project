
import { state } from "./state.js";
import { openMovieModal } from "./movieModal.js";
import { isFavorite, toggleFavorite } from "./favorites.js";

export function clearResults() {
    const box = document.getElementById("results");
    box.innerHTML = "";
}

export function addMovieCard(movie) {

    if (!movie) return;

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
const favorite = isFavorite(movie.imdbID);
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <div class="poster-wrapper">

            <img
                src="${poster}"
                alt="${movie.Title}"
                loading="lazy"
            >

            <div class="rating-badge">
                ⭐ ${rating}
            </div>
            <button class="favorite-btn">
    ${favorite ? "❤️" : "🤍"}
</button>

        </div>

        <div class="card-content">

            <h3 class="movie-title">
                ${movie.Title}
            </h3>

            <p class="movie-info">
                ${genre} • ${movie.Year}
            </p>

        </div>
    `;

    const favoriteBtn =
    card.querySelector(".favorite-btn");

    favoriteBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    toggleFavorite(movie);

    favoriteBtn.textContent =
        isFavorite(movie.imdbID)
            ? "❤️"
            : "🤍";

});

    card.addEventListener("click", () => {
        openMovieModal(movie);
    });

    box.appendChild(card);
}

export function renderMovies() {

    clearResults();

    state.movies
        .slice(0, state.visibleMovies)
        .forEach(movie => addMovieCard(movie));
}