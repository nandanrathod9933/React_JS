import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./CommonCompo/Header";
import HomeCompo from "./Home";
import AboutCompo from "./About.jsx";
import Examples from "./Examples";
import React, { Suspense } from 'react';

// const ClassCompoRouter = React.lazy(() => { return import('./component/ClassComponent/ClassComponentRoter') })
const ClassCompoRouter = React.lazy(() => import('./component/ClassComponent/ClassComponentRoter'))
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderCompo /><HomeCompo /></>,
    },
    {
        path: "/about",
        element: <><HeaderCompo /><AboutCompo /> </>,

    },
    {
        path: "/examples",
        element: <><HeaderCompo /><Examples /> </>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><ClassCompoRouter /></Suspense>,
            },
        ]
    },
]);
export default MainRouter;