import React from 'react';
import { Link } from 'react-router-dom';

const HeaderCompo = () => {
    return (
        <div className="container-fluid mb-5">
            <div className="row align-items-center py-3 px-xl-5">

                <div className="col-lg-6 col-6 text-left">
                    <form action="#">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products" />
                            <button className="btn btn-primary input-group-text" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-6 text-right">
                    <Link to="#" className="btn btn-outline-primary me-1">
                        <i className="fas fa-heart"></i>
                        <span className="badge  bg-dark" style={{ marginLeft: "2px" }}>0</span>
                    </Link>
                    <Link to="#" className="btn btn-outline-primary me-1">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="badge bg-dark" style={{ marginLeft: "2px" }}>0</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderCompo;



// import React, { useEffect, useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBBtn,
//     MDBDropdown,
//     MDBDropdownToggle,
//     MDBDropdownMenu,
//     MDBDropdownItem,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from 'react-router-dom';
// // import { useCookies } from 'react-cookie';

// const HeaderComponent = () => {
//     const [showBasic, setShowBasic] = useState(false);
//     // const [cookies, setCookie, removeCookie] = useCookies();
//     // const navigate = useNavigate()
//     // const [islogin, setIsLogin] = useState(cookies.name !== undefined && cookies.id !== undefined);
//     // const [islogin, setIsLogin] = useState(!!cookies.name);


//     // const handlelogout = () => {
//     //     console.log("called");
//     //     removeCookie('id');
//     //     removeCookie('name');
//     //     setIsLogin(false)
//     //     // localStorage.removeItem('name');
//     //     // localStorage.removeItem('id');
//     //     navigate("/loginpage")
//     // }



//     const data = [
//         { key: `/`, value: "Home" },
//         { key: `/about`, value: "About" },
//         { key: `/getuserdata`, value: "GetUserData" },
//         { key: `/contact`, value: "contact" },
//         // { key: `/apiexample`, value: "FetchApi" },
//         // { key: `/loginpage`, value: "login" },
//     ]
//     const mapdata = data.map(({ key, value }, index) => {
//         return <MDBNavbarItem key={index}>
//             <Link className='nav-link ' to={key}>
//                 {value}
//             </Link>
//         </MDBNavbarItem>
//     });
//     return (
//         <>
//             <MDBNavbar expand='lg' light bgColor='light' >
//                 <MDBContainer fluid >
//                     <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//                     <MDBNavbarToggler
//                         aria-controls='navbarSupportedContent'
//                         aria-expanded='false'
//                         aria-label='Toggle navigation'
//                         onClick={() => setShowBasic(!showBasic)}
//                     >
//                         <MDBIcon icon='bars' fas />
//                     </MDBNavbarToggler>

//                     <MDBCollapse navbar show={showBasic}>
//                         <MDBNavbarNav className='ms-auto w-auto me-5 mb-2 mb-lg-0'>
//                             {mapdata}
//                             <MDBNavbarItem>
//                                 <button className='btn btn-primary' ><Link to="/loginpage" className='text-light'>login </Link></button>
//                             </MDBNavbarItem>

//                             {/* {
//                                 islogin ? (<MDBNavbarItem className='ms-5'>
//                                     <button className='btn btn-primary' onClick={handlelogout}>log out</button>
//                                 </MDBNavbarItem>)
//                                     :
//                                     (<MDBNavbarItem className='ms-5'>
//                                         <button className='btn btn-primary' ><Link to="/loginpage" className='text-light'>login </Link></button>
//                                     </MDBNavbarItem>)
//                             } */}

//                         </MDBNavbarNav>
//                     </MDBCollapse>
//                 </MDBContainer>
//             </MDBNavbar >
//         </>
//     );
// };

// export default HeaderComponent;



