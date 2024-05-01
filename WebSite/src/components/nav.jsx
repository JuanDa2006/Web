import { Link } from "react-router-dom";

const mainLinks = [
    { name: '¿Quienes somos?', url: '/about' },
    { name: 'Precios', url: '/prices' },
    // { name: 'Plantillas', url: '/templates' },
    { name: 'Más información', url: '/information' },
    { name: 'Contactanos', url: '/contact' },
];


const navMainLinks = mainLinks.map((mainLink) => (
    <li>
        <Link to={mainLink.url}>{mainLink.name}</Link>
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
