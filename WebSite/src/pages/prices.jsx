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
		inOn: true,
	},
	{
		text: 'Diseño personalizado a partir de plantilla',
		code: 'done',
		inOn: true,
	},
	{
		text: '5 bloques de información',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Formulario de contacto',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Integracion de Hosting y Dominio',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Integración de redes sociales',
		code: 'close',
		inOn: false
	},
	{
		text: 'Chat en vivo',
		code: 'close',
		inOn: false
	},
	{
		text: 'SEO avanzado',
		code: 'close',
		inOn: false
	},
	{
		text: 'Habilitación de e-commerce',
		code: 'close',
		inOn: false
	},
	{
		text: 'Opciones de pago personalizadas',
		code: 'close',
		inOn: false
	},
];

const mainBasicList = basicList.map((item) => (
	<p className="itemList">
		<span className="material-symbols-outlined" style={{color: item.inOn ? '#007bff' : '#db0404'}}>{item.code}</span>
		{item.text}
	</p>
));

const mediumList = [
	{
		text: 'Hasta 5 páginas',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Diseño personalizado',
		code: 'done',
		inOn: true,
	},
	{
		text: '5+ bloques de información',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Formulario de contacto',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Integracion de Hosting y Dominio',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Habilitación de comercio digital',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Opciones de pago personalizadas',
		code: 'done',
		inOn: true,
	},
	{
		text: 'Presencia digital completa',
		code: 'close',
		inOn: false
	},
	{
		text: 'Chat en vivo',
		code: 'close',
		inOn: false
	},
	{
		text: 'SEO avanzado',
		code: 'close',
		inOn: false
	},
];

const mainMediumList = mediumList.map((item) => (
	<p className="itemList">
		<span className="material-symbols-outlined" style={{color: item.inOn ? '#007bff' : '#db0404'}}>{item.code}</span>
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
					<p className="plan-price">60€</p>
					<div className="plan-buttons-container">
						<button className="plan-buy">
							<p>Contatar</p>
						</button>
						<button className="plan-info">
							Mas información
						</button>
					</div>
				</div>
				<div className="plan">
					<h3>Intermedio</h3>
					<p>Plan para empresas en crecimiento.</p>
					{mainMediumList}
					<p className="plan-price">100€</p>
					<div className="plan-buttons-container">
						<button className="plan-buy">
							<p>Contatar</p>
						</button>
						<button className="plan-info">
							Mas información
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
