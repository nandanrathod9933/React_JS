import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./commonCompo/header";
import HomeCompo from "./Home"
import AboutCompo from "./About.jsx"
import Examples from "./example"
import React, { Suspense } from "react";

// const ClassCompoRoute = React.lazy(() => { return import('./componet/ClassComponet/ClassCompoRouter') })
const ClassCompoRoute = React.lazy(() => import('./componet/ClassComponet/ClassCompoRouter'))

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <> <HeaderCompo /><HomeCompo /></>,
    },
    {
        path: "/about",
        element: <> <HeaderCompo /><AboutCompo /></>,
    },
    {
        path: "/examples",
        element: <> <HeaderCompo /><Examples /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<><div className="spinner"></div></>}><ClassCompoRoute /></Suspense>,
            }
        ]
    },
]);

export default MainRouter;