import { searchMovies } from "./api.js"
import { addMovieCard, clearResults } from "./render.js";
import { keywords } from "./movies.js";

export function loadNewReleases(year) {
    const box = document.getElementById("results");
    box.innerHTML = "<p>Завантаження новинок...</p>";

    let firstLoaded = false;

    keywords.forEach(word => {
        searchMovies(word, year).then(data => {
            if (data.Search && data.Search.length > 0) {

                if (!firstLoaded) {
                    clearResults();
                    firstLoaded = true;
                }

                data.Search.forEach(movie => addMovieCard(movie));
            }
        });
    });
}