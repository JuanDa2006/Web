import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './style/style.css';

import Home from './routes/home';
import ErrorPage from './routes/error-page';
import About from './routes/about';
import Prices from './routes/prices';
import Info from './routes/more-info';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/prices',
        element: <Prices />,
    },
    {
        path: '/information',
        element: <Info />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
