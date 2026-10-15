import { loadNewReleases } from "./js/loader.js";
import { searchMovies } from "./js/api.js";
import { clearResults, addMovieCard } from "./js/render.js";
import { initSearchSuggestions } from "./js/search-suggestions.js";
import { netflixAlertNotFound } from "./js/netflixAlert.js";

window.addEventListener("DOMContentLoaded", () => {
    initSearchSuggestions();
});

window.addEventListener("DOMContentLoaded", () => {
    loadNewReleases(2026); // новинки за роком
});

document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    if (!query) return;

    clearResults();

    searchMovies(query).then(data => {
    clearResults();

    if (!data.Search) {
        const box = document.getElementById("results");
        netflixAlertNotFound();
        return;
    }

    data.Search.forEach(movie => addMovieCard(movie));
});
});