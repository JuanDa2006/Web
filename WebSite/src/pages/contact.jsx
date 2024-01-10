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
				<input
					className="form-item"
					type="text"
					name="name"
					placeholder="Nombre"
				/>
				<input
					className="form-item"
					type="text"
					name="email"
					placeholder="Correo Electrónico"
				/>
				<div className="form-textarea">
					<textarea
						type="text"
						name="message"
						placeholder="Mensaje"
					/>
				</div>
				<input type="hidden" name="form_submission" value="1" />
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
