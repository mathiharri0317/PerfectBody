
function mostrarAlerta(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    var modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
    
    return false; // Evita que el formulario siga su flujo normal
}

function redirigir() {
    window.location.href = "login.html"; // Redirige después de cerrar el modal
}
