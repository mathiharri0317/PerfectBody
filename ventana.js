function mostrarAlerta() {
    var modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
}

function redirigir() {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", mostrarModal);
    }
});
