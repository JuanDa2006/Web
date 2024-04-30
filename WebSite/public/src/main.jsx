import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./style/style.css"

import ErrorPage from './pages/error-page';
import Home from './pages/home';
import About from './pages/about';
import Prices from './pages/prices';
import Contact from './pages/contact';
import Info from './pages/more-info';

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
        path: '/info',
        element: <Info />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
