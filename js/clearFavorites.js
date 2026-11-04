import { clearFavorites } from "./favorites.js";
import {netflixAlertClearFavorites}from "./netflixAlert.js";

export async function handleClearFavorites() {

    const result =
        await netflixAlertClearFavorites();

    if (!result.isConfirmed) {
        return;
    }

    clearFavorites();

    location.reload();
}