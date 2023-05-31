import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminMenu = () => {
    const [aside, setasie] = useState(false)

    const btnclick = () => {
        setasie(!aside)

    }

    return (
        <>
            <aside id="sidebar" className={aside ? "sidebaractive" : ""}>
                <div className="sidemenu" >
                    <ul>
                        <li><Link to='adminallusers'>adminallusers</Link></li>
                        <li><Link to='admindashboard'>admindashboard</Link></li>
                    </ul>

                </div>
            </aside >

            <main id="main" className={aside ? "mainactive" : ""}>
                <h2 id="btnclick" onClick={btnclick}><i className={aside ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></h2>
                <Outlet></Outlet>
            </main>


        </>
    );
};

export default AdminMenu;