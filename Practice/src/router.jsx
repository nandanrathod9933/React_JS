import { createBrowserRouter } from "react-router-dom";
// import HeaderCompo from "./commonCompo/header";
import HeaderCompo from "./commonCompo/headernew";
import HomeCompo from "./Home"
import AboutCompo from "./About.jsx"
import Examples from "./example"
import Product from "./Product"
import ErrorPage from "./ErrorPage.jsx"
import React, { Suspense } from "react";

// const ClassCompoRoute = React.lazy(() => { return import('./componet/ClassComponet/ClassCompoRouter') })
const ClassCompoRoute = React.lazy(() => import('./componet/ClassComponet/ClassCompoRouter'))
const FunctionalCompoRoute = React.lazy(() => import('./componet/FunctionalComponet/FunctionalCompoRouter.jsx'))
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <> <HeaderCompo /><HomeCompo /></>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <> <HeaderCompo /><AboutCompo /></>,
    },
    {
        path: "/product",
        element: <> <HeaderCompo /><Product /></>,
    },

    {
        path: "/examples",
        element: <> <HeaderCompo /><Examples /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<><div className="spinner"></div></>}><ClassCompoRoute /></Suspense>,
            },
            {
                path: "functionalcompo/*",
                element: <Suspense fallback={<><div className="spinner"></div></>}><FunctionalCompoRoute /></Suspense>,
            }
        ]
    },
]);

export default MainRouter;