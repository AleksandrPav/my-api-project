export function openTrailerModal(trailerKey) {

    const modal =
        document.getElementById(
            "trailerModal"
        );

    modal.innerHTML = `
        <div class="trailer-overlay">

            <div class="trailer-content">

                <button
                    class="trailer-close"
                    id="closeTrailer">

                    ✕

                </button>

                <iframe
                    src="https://www.youtube.com/embed/${trailerKey}?autoplay=1"
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

            </div>

        </div>
    `;

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

    document
        .getElementById("closeTrailer")
        .addEventListener(
            "click",
            closeTrailerModal
        );

    modal
        .querySelector(".trailer-overlay")
        .addEventListener(
            "click",
            (event) => {

                if (
                    event.target.classList.contains(
                        "trailer-overlay"
                    )
                ) {

                    closeTrailerModal();

                }

            }
        );
}

export function closeTrailerModal() {

    const modal =
        document.getElementById(
            "trailerModal"
        );

    modal.innerHTML = "";

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}