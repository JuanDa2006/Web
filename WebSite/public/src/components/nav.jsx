const mainLinks = [
    { name: '¿Quienes somos?', url: '/about' },
    { name: 'Precios', url: '/prices' },
    // { name: 'Plantillas', url: '/templates' },
    { name: 'Más información', url: '/info' },
    // { name: 'Contactanos', url: '/contact' },
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
                <label className="logo">
                    <a href="/">Genios Web</a>
                </label>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <span class="material-symbols-outlined">menu</span>
                </label>
                <ul id="nav">{navMainLinks}</ul>
            </nav>
        </>
    );
}
