import React, {useEffect, useState} from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../js/send';

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
    const [userName, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [label, setLabel] = useState('Enviar');
    
    const send = () => {
        if (userName && email && message) {
            const contenido = {
                content: 'Hola',
                embeds: [
                    {
                        email: email,
                        message: message,
                        footer: {
                            text: 'Gracias, atte:' + ' ' + userName,
                        },
                    },
                ],
            };
    
            fetch('https://discord.com/api/webhooks/1142591778835402862/WDUFvzwOjSyJerIpx0ZbfICQfK0WVe7U_sYWKLWtqjnBxXp0yHyrLciDR7amUoBF59wC', {
                method: 'POST',
                body: JSON.stringify(contenido),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                setName('');
                setEmail('');
                setMessage('');
            });
        }
    
        else {
            setLabel("Error")
        }
    };
    

    return (
        <>
            <h1>Contacto</h1>
            <form id='contact-form' action={send} method='post'>
                <div className='form-item'>
                    <input
                        type='text'
                        value={userName}
                        name='name'
                        placeholder='Nombre'
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        value={email}
                        name='email'
                        placeholder='name@example.com'
                    />
                </div>
                <div className='form-textarea'>
                    <textarea
                        type='text'
                        value={message}
                        name='message'
                        placeholder='Mensaje'
                    />
                </div>
                <input type='hidden' name='form_submission' value='1' />
                <button type='submit' class='submit-button'>
                    <p>
                        <span class='material-symbols-outlined'>send</span>
                        {label}
                    </p>
                </button>
            </form>
        </>
    );
};

