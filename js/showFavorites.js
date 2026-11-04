import { getFavoriteMovies } from "./favorites.js";
import { state } from "./state.js";
import { renderMovies } from "./render.js";
import { netflixAlertSelectionIsEmpty} from "./netflixAlert.js";
import { updateButton } from "./loadMore.js";

export function showFavorites() {

    const favorites =
        getFavoriteMovies();

    if (favorites.length === 0) {
        netflixAlertSelectionIsEmpty();
        
        return;
    }
    state.movies = favorites;
    state.visibleMovies = 10;
    renderMovies();
    document
    .getElementById("homeBtn")
    .style.display = "inline-block";
    updateButton();
}