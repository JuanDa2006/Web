import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="container">
                <h1>Error!!!</h1>
                <p>Disculpas, ha ocurrido un error</p>
                <a href="/">Volver</a>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}
