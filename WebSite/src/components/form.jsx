import {useState} from 'react';

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [formulario, setFormulario] = useState();
    const [gracias, setGracias] = useState('hidden');
    const [label, setLabel] = useState('Enviar');

    const send = () => {
        if (name && email && message) {
            const content = {
                content: 'Mensaje',
                embeds: [
                    {
                        title: 'Nombre: ' + name,
                        email: 'Correo electrinico: ' + email,
                        message: message,
                        footer: {
                            text: 'Gracias',
                        },
                    },
                ],
            };

            fetch(
                'https://discord.com/api/webhooks/1233897971620515951/dMpWnkvyPwwbTpteIdlIsqPgAavbks9TYOM5lDJDIGK5JbK-xXgEyWcLZ6xnSwumOcxq',
                {
                    method: 'POST',
                    body: JSON.stringify(content),
                    headers: {
                        'Content-Type': 'aplication/json',
                    },
                }
            ).then((res) => {
                setName('');
                setEmail('');
                setMessage('');
                setFormulario('hidden');
                setGracias('show');
                setLabel('hidden');
            });
        } else {
            setLabel('Intentar de nuevo');
        }
    };

    return (
        <>
            <h1>Contacto</h1>
            <div className={formulario}>
                <form id='contact-form' action='' method='post'>
                    <div className='form-item'>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nombre'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='name@example.com'
                        />
                    </div>
                    <div className='form-textarea'>
                        <textarea
                            type='text'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Mensaje'
                        />
                    </div>
                    <input type='hidden' name='form_submission' value='1' />
                    <button type='submit' class='submit-button' onClick={send}>
                        <p>
                            <span class='material-symbols-outlined'>send</span>
                            {label}
                        </p>
                    </button>
                </form>
            </div>
            <div className={gracias}>
                <p>Enviado, gracias</p>
            </div>
        </>
    );
};

export default Form;
