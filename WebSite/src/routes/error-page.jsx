import { useRouteError } from 'react-router-dom';
import { useEffect } from 'react';

export default function ErrorPage() {
    useEffect(() => {
        document.title = 'GeniosWeb - Error';
    }, []);

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="container">
                <h1>Error!!!</h1>
                <p>Disculpa, ha ocurrido un error</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <div className="back">
                    <a href="/">
                        Volver
                    </a>
                </div>
            </div>
        </div>
    );
}
