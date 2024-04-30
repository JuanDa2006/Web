import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Form from '../components/form';

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
