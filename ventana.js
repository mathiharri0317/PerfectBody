document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("miModal");
    const closeModalBtn = document.querySelector(".close-btn");
    const formulario = document.querySelector("form");

    function mostrarAlerta(event) {
        event.preventDefault(); // Evita que la página se recargue
        modal.style.display = "block";
    }

    function cerrarModal() {
        modal.style.display = "none";
    }

    formulario.addEventListener("submit", mostrarAlerta);
    closeModalBtn.addEventListener("click", cerrarModal);

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });
});

