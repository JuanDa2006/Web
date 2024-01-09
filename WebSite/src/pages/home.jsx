import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';

const firstList = [
    {
        text: 'Alcanzar a más clientes potenciales en línea las 24/7.',
        code: 'done',
    },
    {
        text: 'Mostrar tus productos y servicios de manera atractiva y profesional.',
        code: 'done',
    },
    {
        text: 'Mejorar tu credibilidad y confianza entre los clientes actuales y potenciales.',
        code: 'done',
    },
    {
        text: 'Destacar en los motores de búsqueda y aumentar tu visibilidad en línea.',
        code: 'done',
    },
    {
        text: 'Interactuar con tus clientes a través de formularios de contacto y chat en vivo.',
        code: 'done',
    },
];

const mainFirstList = firstList.map((item) => (
    <p className="itemList">
        <span className="material-symbols-outlined">{item.code}</span>
        {item.text}
    </p>
));

const secondList = [
    {
        text: 'Experiencia en desarrollo web y un compromiso con la excelencia.',
        code: 'done',
    },
    {
        text: 'Un equipo de expertos dedicado a alcanzar tus objetivos en línea con asistencia 365 días al año.',
        code: 'done',
    },
    {
        text: 'Soluciones creativas y eficientes que potenciarán tu presencia en el mundo digital.',
        code: 'done',
    },
    {
        text: 'Atención personalizada y una comunicación clara durante todo el proceso de desarrollo.',
        code: 'done',
    },
];

const mainSecondList = secondList.map((item) => (
    <p className="itemList">
        <span className="material-symbols-outlined">{item.code}</span>
        {item.text}
    </p>
));

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <>
            <main>
                <div className="main-section-1">
                    <div className="firstList">
                        <h2>Razones para Tener una Página Web</h2>
                        {mainFirstList}
                    </div>
                    <div className="secondList">
                        <h2>Por Qué Elegir Genios Web</h2>
                        <p>En Genios Web, <strong>nos enorgullecemos de ser tu aliado digital.</strong> Te ofrecemos:</p>
                        {mainSecondList}
                    </div>
                </div>
            </main>
        </>
    );
}
