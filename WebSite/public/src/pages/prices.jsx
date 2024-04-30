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
        inOn: false,
    },
    {
        text: 'Chat en vivo',
        code: 'close',
        inOn: false,
    },
    {
        text: 'SEO avanzado',
        code: 'close',
        inOn: false,
    },
    {
        text: 'Habilitación de e-commerce',
        code: 'close',
        inOn: false,
    },
    {
        text: 'Opciones de pago personalizadas',
        code: 'close',
        inOn: false,
    },
];

const mainBasicList = basicList.map((item) => (
    <p className="itemList">
        <span
            className="material-symbols-outlined"
            style={{ color: item.inOn ? '#007bff' : '#db0404' }}>
            {item.code}
        </span>
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
        inOn: false,
    },
    {
        text: 'Chat en vivo',
        code: 'close',
        inOn: false,
    },
    {
        text: 'SEO avanzado',
        code: 'close',
        inOn: false,
    },
];

const mainMediumList = mediumList.map((item) => (
    <p className="itemList">
        <span
            className="material-symbols-outlined"
            style={{ color: item.inOn ? '#007bff' : '#db0404' }}>
            {item.code}
        </span>
        {item.text}
    </p>
));

const plusList = [
    {
        text: '10+ páginas',
        code: 'done',
        inOn: true,
    },
    {
        text: 'Diseño personalizado 100%',
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
        text: 'Todos los beneficios del Plan Intermedio',
        code: 'done',
        inOn: true,
    },
    {
        text: 'Chat en vivo',
        code: 'done',
        inOn: true,
    },
    {
        text: 'SEO avanzado',
        code: 'done',
        inOn: true,
    },
    {
        text: 'Habilitación de e-commerce',
        code: 'done',
        inOn: true,
    },
    {
        text: 'Opciones de pago personalizadas',
        code: 'done',
        inOn: true,
    },
];

const mainPlusList = plusList.map((item) => (
    <p className="itemList">
        <span
            className="material-symbols-outlined"
            style={{ color: item.inOn ? '#007bff' : '#db0404' }}>
            {item.code}
        </span>
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
                    <p className="plan-price">80€</p>
                    <div className="plan-buttons-container">
                        <button className="plan-buy">
                            <a href="/">Contatar</a>
                        </button>
                        <button className="plan-info">
                            <a href="/info">Mas información</a>
                        </button>
                    </div>
                </div>
                <div className="plan">
                    <h3>Intermedio</h3>
                    <p>Plan para empresas en crecimiento.</p>
                    {mainMediumList}
                    <p className="plan-price">150€</p>
                    <div className="plan-buttons-container">
                        <button className="plan-buy">
                            <a href="/">Contatar</a>
                        </button>
                        <button className="plan-info">
                            <a href="/info">Mas información</a>
                        </button>
                    </div>
                </div>
                <div className="plan">
                    <h3>Avanzado</h3>
                    <p>Plan completo para grandes proyectos.</p>
                    {mainPlusList}
                    <p className="plan-price">200€</p>
                    <div className="plan-buttons-container">
                        <button className="plan-buy">
                            <a href="/">Contatar</a>
                        </button>
                        <button className="plan-info">
                            <a href="/info">Mas información</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
