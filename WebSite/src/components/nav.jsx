const mainLinks = [
    { name: '¿Quienes somos?', url: '/about' },
    { name: 'Plantillas', url: '/templates' },
    { name: 'Más información', url: '/info' },
];

const navMainLinks = mainLinks.map((mainLink) => (
    <li>
        <a href={mainLink.url}>{mainLink.name}</a>
    </li>
));

export default function Nav() {
    return (
        <>
            <nav>
                <div className="page-name">
                    <a href="/">Genios Web</a>
                </div>
                <div className="links">
                    <ul>{navMainLinks}</ul>
                </div>
            </nav>
        </>
    );
}
