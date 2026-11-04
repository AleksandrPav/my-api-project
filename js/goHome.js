import { loadNewReleases } from "./loader.js";

export function goHome() {

    loadNewReleases(2026);

    document
        .getElementById("homeBtn")
        .style.display = "none";
}