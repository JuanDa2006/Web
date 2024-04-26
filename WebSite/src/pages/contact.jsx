import React, {Fragment, useEffect} from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

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

const Form = () => {
    return (
        <>
            <h1>Contacto</h1>
            <form id='contact-form' action='' method='post'>
                <div className='form-item'>
                    <input type='text' name='name' placeholder='Nombre' />
                </div>
                <div className='form-item'>
                    <input
                        id='email'
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
