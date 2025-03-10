document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica o modo salvo no localStorage e aplica ao carregar a página
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️";
        }
    });
});
