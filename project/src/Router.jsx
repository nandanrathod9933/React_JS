import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import HeaderCompo from "./commonCompo/header";
import HeaderCompo from "./Includes/HeaderComponent.jsx";
import HomeCompo from "./Pages/Home.jsx"
import AboutCompo from "./Pages/About.jsx"
import ContactCompo from "./Pages/Contact.jsx"
import LoginPage from "./Component/LoginCompo.jsx"
import APIExample from "./Component/ApiExample.jsx"


// import ErrorPage from "./ErrorPage.jsx"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <> <HeaderCompo /><HomeCompo /></>,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <> <HeaderCompo /><AboutCompo /></>,
    },
    {
        path: "/contact",
        element: <> <HeaderCompo /><ContactCompo /></>,
    },
    {
        path: "/loginpage",
        element: <> <LoginPage /></>,
    },
    {
        path: "/apiexample",
        element: <><HeaderCompo /> <APIExample /></>,
    },
    {
        path: "/admindashbord",
        element: <>"welcome to admindashbord"</>,
    },
    {
        path: "/userdashboard",
        element: <>"welcome to userdashboard"</>,
    }



]);

export default Router;