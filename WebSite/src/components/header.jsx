import banner from '../assets/img/img2.svg';

export default function Header() {
    return (
        <>
            <header>
                <div className='header-text'>
                    <h1>Genios Web</h1>
                    <p>Navegando a tu Éxito Digital</p>
                </div>
                <div className='header-img'>
                    <img src={banner} />
                </div>
            </header>
        </>
    );
}
