import { getMovieTrailer } from "./tmdbApi.js";
import { openTrailerModal } from "./trailerModal.js";

export async function openMovieModal(movie) {

    const trailerKey =
        await getMovieTrailer(movie.Title);

    const modal =
        document.getElementById("movieModal");

    modal.innerHTML = `
        <div class="modal-overlay">

            <div class="modal-content">

                <button
                    class="modal-close"
                    id="closeModal">

                    ✕

                </button>

                <div class="modal-body">

                    <img
                        src="${movie.Poster}"
                        alt="${movie.Title}"
                        class="modal-poster"
                    >

                    <div class="modal-info">

                        <h2>
                            ${movie.Title}
                        </h2>

                        <p>
                            ⭐ <strong>${movie.imdbRating}</strong>
                        </p>

                        <p>
                            🎭 ${movie.Genre}
                        </p>

                        <p>
                            🎬 ${movie.Director}
                        </p>

                        <p>
                            ⏱ ${movie.Runtime}
                        </p>

                        <p>
                            📅 ${movie.Year}
                        </p>

                        <p class="movie-plot">
                            ${movie.Plot}
                        </p>

                        <button
                            id="watchTrailerBtn"
                            class="watch-trailer-btn">

                            ▶ Watch Trailer

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;

    modal.style.display = "block";

    document.body.style.overflow =
        "hidden";

    document
        .getElementById("closeModal")
        .addEventListener(
            "click",
            closeMovieModal
        );

    const trailerBtn =
        document.getElementById(
            "watchTrailerBtn"
        );

    if (trailerBtn && trailerKey) {

        trailerBtn.addEventListener(
            "click",
            () => {
                openTrailerModal(
                    trailerKey
                );
            }
        );

    }

}

export function closeMovieModal() {

    const modal =
        document.getElementById(
            "movieModal"
        );

    modal.style.display = "none";

    document.body.style.overflow =
        "auto";
}