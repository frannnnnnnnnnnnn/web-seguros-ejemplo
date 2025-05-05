// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("activo"));
            link.classList.add("activo");
        });
    });

    console.log("Script cargado correctamente.");
});
