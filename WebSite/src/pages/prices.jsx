import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Prices() {
    useEffect(() => {
        document.title = 'WebSite - Precios';
    }, []);
	return (
		<>
			<section id="prices">
				<Nav />
				<main id="prices-continer">
					<Price />
				</main>
				<Footer />
			</section>
		</>
	);
}

const basicList = [
	{
		text: '1 Página',
		code: 'done',
	},
	{
		text: 'Diseño personalizado a partir de plantilla',
		code: 'done',
	},
	{
		text: '5 bloques de información',
		code: 'done',
	},
	{
		text: 'Formulario de contacto',
		code: 'done',
	},
	{
		text: 'Integracion de Hosting y Dominio',
		code: 'done',
	},
];

const mainBasicList = basicList.map((item) => (
	<p className="itemList">
		<span className="material-symbols-outlined">{item.code}</span>
		{item.text}
	</p>
));

function Price() {
	return (
		<>
			<h1>Precios</h1>
			<div id="plan-contenedores">
				<div className="plan">
					<h3>Básico</h3>
					<p>Plan ideal para comenzar.</p>
					{mainBasicList}
				</div>
			</div>
		</>
	);
}
