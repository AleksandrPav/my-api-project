export function addMovieCard(movie) {
    const box = document.getElementById("results");
    const poster = movie.Poster !== "N/A" ? movie.Poster : "img/no-poster.png";

    box.innerHTML += `
        <div class="card">
            <img src="${poster}" alt="Poster">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
    `;
}

export function clearResults() {
    document.getElementById("results").innerHTML = "";
}