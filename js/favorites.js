const STORAGE_KEY = "favoriteMovies";
const STORAGE_DATA_KEY = "favoriteMoviesData";

export function getFavorites() {

    const favorites =
        localStorage.getItem(STORAGE_KEY);

    return favorites
        ? JSON.parse(favorites)
        : [];
}

export function isFavorite(imdbID) {

    const favorites = getFavorites();

    return favorites.includes(imdbID);

}

export function toggleFavorite(movie) {

    let favorites = getFavorites();
    let favoriteMovies =
    getFavoriteMoviesData();

   if (favorites.includes(movie.imdbID)) {
    favorites = favorites.filter(
        id => id !== movie.imdbID
    );
    favoriteMovies = favoriteMovies.filter(
        item => item.imdbID !== movie.imdbID
    );

} else {

    favorites.push(movie.imdbID);

    favoriteMovies.push(movie);
}

localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
);

localStorage.setItem(
    STORAGE_DATA_KEY,
    JSON.stringify(favoriteMovies)
);
}

export function getFavoriteMovies() {

    const favorites =
        localStorage.getItem("favoriteMoviesData");

    return favorites
        ? JSON.parse(favorites)
        : [];
}

function getFavoriteMoviesData() {

    const movies =
        localStorage.getItem(STORAGE_DATA_KEY);

    return movies
        ? JSON.parse(movies)
        : [];
}

export function clearFavorites() {

    localStorage.removeItem(
        STORAGE_KEY
    );

    localStorage.removeItem(
        STORAGE_DATA_KEY
    );

}