
function mostrarAlerta(event) {
    event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
    
    document.getElementById("modalAceptar").addEventListener("click", function() {
        window.location.href = "login.html";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", mostrarAlerta);
    }
});
