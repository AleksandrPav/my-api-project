import { loadNewReleases } from "./js/loader.js";
import { searchMovies } from "./js/api.js";
import { clearResults, addMovieCard } from "./js/render.js";
import { initSearchSuggestions } from "./js/search-suggestions.js";
import { netflixAlertNotFound, netflixAlertSearchIsEmpty } from "./js/netflixAlert.js";
import { initLoadMore } from "./js/loadMore.js";
import { showFavorites }from "./js/showFavorites.js";
import { goHome } from "./js/goHome.js";
import {handleClearFavorites} from "./js/clearFavorites.js";
import { searchMovie, getMovieTrailer }from "./js/tmdbApi.js";

searchMovie("Batman Begins")
    .then(data => console.log(data));
    
getMovieTrailer("Batman Begins")
    .then(key => console.log(key));

window.addEventListener("DOMContentLoaded", () => {
    initSearchSuggestions();
    loadNewReleases(2026);
    initLoadMore();
});

document
    .getElementById("favoritesBtn")
    .addEventListener(
        "click",
        showFavorites
    );

    document
    .getElementById("homeBtn")
    .addEventListener(
        "click",
        goHome
    );

    document
    .getElementById(
        "clearFavoritesBtn"
    )
    .addEventListener(
        "click",
        handleClearFavorites
    );


document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    if (!query) {
        netflixAlertSearchIsEmpty();
        return;
    }
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

