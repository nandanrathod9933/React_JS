import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import GetUserData from './Pages/GetUserData.jsx'
import ContactPage from './Pages/ContactPage.jsx'


const Mainroutes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    }, {
        path: "/home",
        element: <HomePage />
    }, {
        path: "/about",
        element: <AboutPage />
    }, {
    }, {
        path: "/getuserdata",
        element: <GetUserData />
    }, {
        path: "/contact",
        element: <ContactPage />
    }
]);


export default Mainroutes;