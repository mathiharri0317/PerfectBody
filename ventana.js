function mostrarModal(event) {
    event.preventDefault(); // Evita el envío automático del formulario
    document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
    window.location.href = "index.html"; // Reemplaza con la URL de destino
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", mostrarModal);
    }
});
