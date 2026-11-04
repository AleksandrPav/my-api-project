export function openMovieModal(movie) {

    const modal = document.getElementById("movieModal");

    modal.innerHTML = `
        <div class="modal-overlay">

            <div class="modal-content">

                <button class="modal-close" id="closeModal">
                    ✕
                </button>

                <img
                    src="${movie.Poster}"
                    alt="${movie.Title}"
                    class="modal-poster"
                >

                <div class="modal-info">

                    <h2>${movie.Title}</h2>

                    <p>
                        ⭐ ${movie.imdbRating}
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

                    <p>
                        ${movie.Plot}
                    </p>

                </div>

            </div>

        </div>
    `;

    modal.style.display = "block";

    document
        .getElementById("closeModal")
        .addEventListener("click", closeMovieModal);

}

export function closeMovieModal() {

    const modal = document.getElementById("movieModal");

    modal.style.display = "none";
}

