function mostrarAlerta(event) {
    event.preventDefault(); // Detiene el envío del formulario
    document.getElementById("miModal").style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", mostrarModal);
    }
});
