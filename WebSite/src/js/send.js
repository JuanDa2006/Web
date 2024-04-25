document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const successImage = document.getElementById('success-image');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los datos del formulario
        const formData = new FormData(contactForm);

        // Realizar una solicitud AJAX para enviar los datos
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../php/enviar.php', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // La solicitud se completó con éxito, mostrar la imagen de éxito
                successImage.style.display = 'block';
            } else {
                // Manejar errores si es necesario
                console.error('Error al enviar el formulario.');
            }
        };
        xhr.send(formData);
    });
});