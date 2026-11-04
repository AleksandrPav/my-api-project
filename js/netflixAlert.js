export function netflixAlertNotFound() {
    Swal.fire({
        title: "Фільм не знайдено",
        text: "Спробуй іншу назву",
        icon: "error",

        background: "#0d0d0d",
        color: "#ffffff",
        iconColor: "#e50914",
        confirmButtonColor: "#e50914",
        confirmButtonText: "Добре",

        backdrop: `
            rgba(0,0,0,0.85)
        `,

        showClass: {
            popup: `
                animate__animated
                animate__fadeInDown
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutUp
            `
        }
        
    });
}


export function netflixAlertSelectionIsEmpty() {
    Swal.fire({
        title: "Your selection is empty",
        text: "Add movies to your favorites ❤️",
        icon: "info", 
        background: "#0d0d0d",
        color: "#ffffff",
        iconColor: "#e50914",
        confirmButtonColor: "#e50914",
        confirmButtonText: "OK",
        backdrop: `
            rgba(0,0,0,0.85)
        `,
        showClass: {
            popup: `
                animate__animated
                animate__fadeInDown
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutUp
            `
        }
        
    });
}

export function netflixAlertSearchIsEmpty() {

    Swal.fire({
        icon: "warning",
        title: "The search field is empty",
        text: "Enter the name of the movie or TV show before searching 🎬",
        confirmButtonText: "OK",
        background: "#0d0d0d",
        color: "#ffffff",
        iconColor: "#e50914",
        confirmButtonColor: "#e50914",
        confirmButtonText: "OK",
        backdrop: `
            rgba(0,0,0,0.85)
        `,
        showClass: {
            popup: `
                animate__animated
                animate__fadeInDown
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutUp
            `
        }
    });

}

export async function netflixAlertClearFavorites() {
    return Swal.fire({
        title: "Clear your selection?",
        text: "All saved movies will be deleted.",
        icon: "warning", 
        showCancelButton: true,
        background: "#0d0d0d",
        color: "#ffffff",
        iconColor: "#e50914",
        confirmButtonColor: "#e50914",
        confirmButtonText: "Delete?",
        cancelButtonText: "Cancel",
        backdrop: `
            rgba(0,0,0,0.85)
        `,
        showClass: {
            popup: `
                animate__animated
                animate__fadeInDown
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutUp
            `
        },
        confirmButtonColor: "#e50914",
        cancelButtonColor: "#6c757d",
        reverseButtons: true

    });
}

