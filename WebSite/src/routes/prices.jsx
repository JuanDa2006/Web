import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

import { Link } from 'react-router-dom';

export default function Prices() {
    useEffect(() => {
        document.title = 'GeniosWeb - Precios';
    }, []);

    return (
        <>
            <section id='prices'>
                <Nav />
                <main id='prices-continer'>
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
    <div className='detailsList'>
        <p className='itemList'>
            <span
                className='material-symbols-outlined'
                style={{ color: item.inOn ? '#007bff' : '#db0404' }}
            >
                {item.code}
            </span>
            {item.text}
        </p>
    </div>
));

const mediumList = [
    {
        text: 'Hasta 3 páginas',
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
    <div className='detailsList'>
        <p className='itemList'>
            <span
                className='material-symbols-outlined'
                style={{ color: item.inOn ? '#007bff' : '#db0404' }}
            >
                {item.code}
            </span>
            {item.text}
        </p>
    </div>
));

const plusList = [
    {
        text: 'Ecommerce',
        code: 'done',
        inOn: true,
    },
    {
        text: '10+ páginas web',
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
    <div className='detailsList'>
        <p className='itemList'>
            <span
                className='material-symbols-outlined'
                style={{ color: item.inOn ? '#007bff' : '#db0404' }}
            >
                {item.code}
            </span>
            {item.text}
        </p>
    </div>
));

function Price() {
    return (
        <>
            <h1>Precios</h1>
            <div id='plan-contenedores'>
                <div className='plan'>
                    <h3>Básico</h3>
                    <p>Plan ideal para comenzar.</p>
                    <p className='plan-price'>120€</p>
                    {mainBasicList}
                    <div className='plan-buttons-container'>
                        <button className='plan-buy'>
                            <Link to='/contact'>Contratar</Link>
                        </button>
                        <button className='plan-info'>
                            <Link to='/information'>Mas información</Link>
                        </button>
                    </div>
                </div>
                <div className='plan'>
                    <h3>Intermedio</h3>
                    <p>Plan para empresas en crecimiento.</p>
                    <p className='plan-price'>300€</p>
                    {mainMediumList}
                    <div className='plan-buttons-container'>
                        <button className='plan-buy'>
                            <Link to='/contact'>Contratar</Link>
                        </button>
                        <button className='plan-info'>
                            <Link to='/information'>Mas información</Link>
                        </button>
                    </div>
                </div>
                <div className='plan'>
                    <h3>Avanzado</h3>
                    <p>Perfecto para grandes proyectos</p>
                    <p className='plan-price'></p>
                    {mainPlusList}
                    <p className='plan-price'></p>
                    <div className='plan-buttons-container'>
                        <button className='plan-buy'>
                            <Link to='/contact'>Contratar</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
