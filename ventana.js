document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue
            
            var modal = new bootstrap.Modal(document.getElementById("miModal"));
            modal.show();
        });
    }
});
