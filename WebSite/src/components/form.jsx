import { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const Form = () => {
    return (
        <>
            <h1>Contacto</h1>
            <div>
                <form>
                    <div className='form-item'>
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Nombre'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            type='email'
                            id='email'
                            name='user_email'
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
            </div>
        </>
    );
};

export default Form;
