document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const modal = new bootstrap.Modal(document.getElementById("miModal"));
    
    // Capturar el botón "Aceptar" dentro del modal
    const botonAceptar = document.getElementById("botonAceptar");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario recargue la página
        modal.show(); // Muestra la ventana emergente
    });

    botonAceptar.addEventListener("click", function () {
        window.location.href = "index.html"; // Redirige al index al hacer clic en "Aceptar"
    });
});
