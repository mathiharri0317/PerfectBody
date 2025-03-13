function mostrarAlerta() {
    let modal = document.getElementById("miModal");
    modal.style.display = "block";
    return false; // Evita que el formulario se envíe automáticamente
}

function cerrarModal() {
    let modal = document.getElementById("miModal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", mostrarModal);
    }
});
