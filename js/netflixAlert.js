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