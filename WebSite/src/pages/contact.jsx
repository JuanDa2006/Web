import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Contact() {
    return (
        <>
            <section id="contact">
                <Nav />
                <main id="contact-form">
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
            <form id="contact-form" action="enviar.php" method="post">
                <div className="form-item">
                    <input type="text" name="name" placeholder="Nombre" />
                </div>
                <div className="form-item">
                    <input
                        type="text"
                        name="email"
                        placeholder="Correo Electrónico"
                    />
                </div>
                <div className="form-item">
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Mensaje"
                    />
                </div>
                <div className="form-item">
                    <input type="hidden" name="form_submission" value="1" />
                </div>
                <button type="submit" class="submit-button">
                    <p>
                        <span class="material-symbols-outlined">send</span>
                        Enviar
                    </p>
                </button>
            </form>
        </>
    );
}
