import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

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

export default function Contact() {
    useEffect(() => {
        document.title = 'WebSite - Contacto';
    }, []);

    return (
        <>
            <section id='contact'>
                <Nav />
                <main id='contact-form'>
                    <Form />
                </main>
                <Footer />
            </section>
        </>
    );
}

function Form() {
    return (
        <>
            <h1>Contacto</h1>
            <form id='contact-form' action='enviar.php' method='post'>
                <div className='form-item'>
                    <input type='text' name='name' placeholder='Nombre' />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        name='email'
                        placeholder='name@example.com'
                    />
                </div>
                <div className='form-textarea'>
                    <textarea
                        type='text'
                        name='message'
                        placeholder='Mensaje'
                    />
                </div>
                <input type='hidden' name='form_submission' value='1' />
                <button type='submit' class='submit-button'>
                    <p>
                        <span class='material-symbols-outlined'>send</span>
                        Enviar
                    </p>
                </button>
            </form>
        </>
    );
}
