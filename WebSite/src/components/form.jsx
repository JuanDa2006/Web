import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_iauuhfj';
const TEMPLATE_ID = 'template_dcql336';
const PUBLIC_KEY = 'rF_wUOwhtGGfGq4Fj';

const Form = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
                alert('Mesaje enviado con exito');
            },
            (error) => {
                console.log(error.text);
                console.log('Error');
                alert('Error al enviar el mensaje');
            }
        );
        e.target.reset();
    };

    return (
        <>
            <h1>Contacto</h1>
            <div>
                <form id='contact-form' onSubmit={handleOnSubmit}>
                    <div className='form-item'>
                        <input
                            type='text'
                            id='from_name'
                            name='from_name'
                            placeholder='Nombre'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            type='email'
                            id='from_email'
                            name='from_email'
                            placeholder='name@example.com'
                        />
                    </div>
                    <div className='form-textarea'>
                        <textarea
                            type='text'
                            id='message'
                            name='message'
                            placeholder='Mensaje'
                        />
                    </div>
                    <input type='hidden' name='form_submission' value='1' />
                    <button type='submit' class='submit-button'>
                        <span class='material-symbols-outlined'>send</span>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
