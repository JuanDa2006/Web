import Nav from "../components/nav";

export default function Header(){
    return(
        <>
            <Nav />
            <header>
                <div className="header-text">
                    <h1>Genios Web</h1>
                    <p>Navegando a tu Éxito Digital</p>
                </div>
                <div className="header-img">
                    <img src="../src/" alt="" />
                </div>
            </header>
        </>
    );
}