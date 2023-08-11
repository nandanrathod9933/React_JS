import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import MainRoutes from './mainroutes';
import CustomStore from './Store/CustomStore.jsx';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
    <RouterProvider router={MainRoutes} />
    {/* <MainRoutes /> */}
  </Provider>
);

