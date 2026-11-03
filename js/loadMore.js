import { state } from "./state.js";
import { config } from "./config.js";
import { renderMovies } from "./render.js";

export function initLoadMore() {

    const button = document.getElementById("loadMoreBtn");

    if (!button) {
        console.error("Кнопка loadMoreBtn не знайдена");
        return;
    }

   button.addEventListener("click", () => {

    state.visibleMovies += config.loadMoreStep;

    renderMovies();

    updateButton();

});

}

export function updateButton() {

    const button = document.getElementById("loadMoreBtn");

    if (!button) return;

    if (state.visibleMovies >= state.movies.length) {
        button.style.display = "none";
    } else {
        button.style.display = "block";
    }
}

