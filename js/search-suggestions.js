import { searchMovies } from "./api.js";

let timer;
let manualSelect = false;

export function initSearchSuggestions() {
    const input = document.getElementById("searchInput");
    const suggestionsBox = document.getElementById("suggestions");

    input.addEventListener("input", () => {
        const query = input.value.trim();

        // Якщо користувач вибрав фільм вручну — не показуємо підказки
        if (manualSelect) {
            manualSelect = false;
            return;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            if (query.length === 0) {
                suggestionsBox.innerHTML = "";
                suggestionsBox.style.display = "none";
                return;
            }

            searchMovies(query).then(data => {
                if (!data.Search) {
                    suggestionsBox.innerHTML = "";
                    suggestionsBox.style.display = "none";
                    return;
                }

                suggestionsBox.innerHTML = "";
                suggestionsBox.style.display = "block";

                data.Search.slice(0, 6).forEach(movie => {
                    const item = document.createElement("div");
                    item.className = "suggestion-item";
                    item.textContent = movie.Title;

                    item.addEventListener("click", () => {
                        manualSelect = true; // важливо!

                        input.value = movie.Title;

                        suggestionsBox.innerHTML = "";
                        suggestionsBox.style.display = "none";

                        input.dispatchEvent(new Event("input"));
                    });

                    suggestionsBox.appendChild(item);
                });
            });
        }, 300);
    });
}