 document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const query = input.value.trim();
            if (query) {
                // Navigate to show.html with the search query as URL parameter
                window.location.href = `show.html?query=${encodeURIComponent(query)}`;
            }
        }
    });
});
