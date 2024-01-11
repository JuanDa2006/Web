const mainLinks = [
	{ name: '¿Quienes somos?', url: '/about' },
	{ name: 'Precios', url: '/prices' },
	{ name: 'Plantillas', url: '/templates' },
	{ name: 'Más información', url: '/info' },
	{ name: 'Contactanos', url: '/contact' },
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
				<input type="checkbox" id="check" />
				<label for="check" class="checkbtn">
					<span class="material-symbols-outlined">menu</span>
				</label>
				<div className="links">
					<ul>{navMainLinks}</ul>
				</div>
			</nav>
		</>
	);
}
