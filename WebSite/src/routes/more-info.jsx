import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Info() {
    useEffect(() => {
        document.title = 'GeniosWeb - Información';
    }, []);

    return (
        <>
            <section id="info">
                <Nav />
                <main className='container'>
                    <h1>Descubre nuestros planes de desarrollo</h1>
                    <div className="container">
                        <h2>Plan Inicio Web (Básico)</h2>
                        <p>
                            ¿Estás comenzando tu aventura en línea? Nuestro Plan
                            Inicio Web es perfecto para ti. En este nivel
                            básico, obtendrás dos páginas web que representarán
                            tu negocio o proyecto en internet. El diseño de tu
                            sitio será personalizado, utilizando una plantilla
                            como punto de partida para darle un toque único y
                            acorde con tu identidad. Contarás con cinco bloques
                            de información que te permitirán organizar y mostrar
                            tus contenidos de forma efectiva. Además, incluimos
                            un formulario de contacto para que tus visitantes
                            puedan comunicarse contigo fácilmente. Y no te
                            preocupes por la presencia en línea, porque el
                            hosting (alojamiento web) está incluido,
                            garantizando que tu sitio estará disponible para el
                            mundo.
                        </p>
                    </div>
                    <div className="container">
                        <h2>Plan Emprendedor Web (Intermedio)</h2>
                        <p>
                            Si tu empresa está creciendo y necesitas una
                            presencia en línea más robusta, nuestro Plan
                            Emprendedor Web es lo que buscas. Con este plan
                            intermedio, dispondrás de diez páginas web que te
                            permitirán presentar más información y servicios a
                            tus clientes. En este nivel, el diseño será
                            completamente personalizado para reflejar tu
                            identidad y diferenciarte de la competencia. Además
                            de los cinco bloques de información, tendrás
                            opciones adicionales para estructurar tu contenido y
                            mostrarlo de manera profesional. El formulario de
                            contacto seguirá disponible para facilitar la
                            comunicación con tus clientes. Y, como en todos
                            nuestros planes, el hosting está incluido para
                            asegurar una presencia sólida en línea.
                        </p>
                    </div>
                    <div className="container">
                        <h2>Plan Proyecto Web Total (Avanzado)</h2>
                        <p>
                            ¿Tienes un proyecto ambicioso y de gran envergadura?
                            Nuestro Plan Proyecto Web Total es la solución
                            definitiva para ti. Con diez o más páginas web,
                            tendrás suficiente espacio para mostrar una cantidad
                            extensa de información y servicios. En este nivel
                            avanzado, nuestro equipo de diseñadores trabajará
                            contigo para crear un diseño 100% personalizado que
                            refleje la esencia de tu proyecto y transmita
                            profesionalismo y confianza. Además de los bloques
                            de información, tendrás acceso a funciones avanzadas
                            como el chat en vivo, que te permitirá atender a tus
                            visitantes en tiempo real y brindar un servicio de
                            excelencia. El SEO avanzado te ayudará a mejorar tu
                            visibilidad en los motores de búsqueda y atraer más
                            visitantes a tu sitio. Con la habilitación de
                            e-commerce, podrás vender tus productos en línea y
                            ampliar tus oportunidades de negocio. Y para ofrecer
                            a tus clientes una experiencia única, contarás con
                            opciones de pago personalizadas.
                        </p>
                    </div>
                    <div className="container">
                        <h2>Mejoras Aplicadas</h2>
                        <p>
                            Durante el proceso de desarrollo, hemos aplicado
                            diversas mejoras para asegurar el éxito de tu sitio
                            web:
                        </p>
                        <ul>
                            <li>
                                <strong>Diseño Responsivo: </strong> Tu sitio
                                web se adapta automáticamente a diferentes
                                dispositivos, como smartphones, tablets y
                                computadoras, garantizando una experiencia
                                óptima para cada usuario.
                            </li>
                            <li>
                                <strong>
                                    Call-to-Action (CTA) Atractivos:{' '}
                                </strong>
                                Hemos implementado botones llamativos y frases
                                persuasivas como "Solicitar Cotización" y
                                "Regístrate Ahora" para dirigir a tus visitantes
                                hacia acciones específicas.
                            </li>
                            <li>
                                <strong>Velocidad de Carga Rápida: </strong>
                                Optimizamos el tamaño de las imágenes y
                                utilizamos herramientas de compresión para
                                mejorar la velocidad de carga de tu sitio, lo
                                que impacta positivamente en la experiencia del
                                usuario y el SEO.
                            </li>
                            <li>
                                <strong>Contenido de Calidad: </strong> Tu sitio
                                cuenta con contenido relevante, útil y bien
                                estructurado, con títulos, subtítulos y párrafos
                                que facilitan la lectura.
                            </li>
                            <li>
                                <strong>SEO Amigable: </strong>
                                Utilizamos etiquetas HTML adecuadas, como
                                títulos (h1, h2, h3) y metaetiquetas, para
                                mejorar el posicionamiento en los motores de
                                búsqueda.
                            </li>
                            <li>
                                <strong>Integración de Redes Sociales: </strong>
                                Agregamos botones para compartir contenido en
                                redes sociales y mostramos tus perfiles para
                                facilitar la interacción con tus seguidores.
                            </li>
                            <li>
                                <strong>
                                    Formulario de Contacto Mejorado:{' '}
                                </strong>
                                Hemos incluido un formulario de contacto claro y
                                fácil de usar, solicitando solo la información
                                necesaria y añadiendo un mensaje de
                                agradecimiento tras el envío.
                            </li>
                            <li>
                                <strong>Testimonios y Reseñas: </strong>
                                Mostramos testimonios de clientes satisfechos
                                para generar confianza en tus productos o
                                servicios.
                            </li>
                            <li>
                                <strong>Efectos Visuales Atractivos: </strong>
                                Utilizamos animaciones y transiciones CSS para
                                darle dinamismo a tu sitio y destacar elementos
                                importantes.
                            </li>
                            <li>
                                <strong>
                                    Llamadas a la Acción Permanentes:{' '}
                                </strong>
                                Hemos colocado botones o enlaces de CTA en
                                diferentes partes del sitio para que los
                                visitantes siempre tengan la opción de realizar
                                una acción relevante.
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </section>
        </>
    );
}
