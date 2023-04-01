import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderCom from './CommonCompo/Header';
import ComponentData from './01Component';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainRouter from './Router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={MainRouter} />
);

  // <>
  //   <HeaderCom />
  //   <ComponentData />
  // </>
  // <div>
  //   <HeaderCom />
  //   <ComponentData />
  // </div>


