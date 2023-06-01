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
                <h1 className='border-bottom'>Admin</h1>
                <div className="sidemenu mt-3" >
                    <ul className='ps-0'>
                        <li><Link to='admindashboard'> dashboard</Link></li>
                        <li><Link to='adminallusers'>All Users</Link></li>
                    </ul>

                </div>
            </aside >

            <main id="main" className={aside ? "mainactive" : ""}>
                <header className='hedaer'>
                    <div className="flex align-items-center">
                        <div className="col">
                            <h2 id="btnclick" onClick={btnclick} className=' p-2 mb-0'><i className={aside ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></h2>
                        </div>
                        <div className="col">
                            <div className="flex align-items-center justify-content-between">
                                <div className="input_box">
                                    <input type="text" className='dash_input' />
                                    <i class="fa-solid fa-search"></i>
                                </div>
                                <div className="list me-5">
                                    <ul className='mb-0'>
                                        <li><i class="fa-solid fa-user"></i></li>
                                        <li><i class="fa-solid fa-house"></i></li>
                                        <li><i class="fa-solid  fa-bell"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className='px-2 pt-3'>
                    <Outlet></Outlet>
                </section>
            </main>


        </>
    );
};

export default AdminMenu;