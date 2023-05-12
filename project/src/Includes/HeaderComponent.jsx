import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    const [showBasic, setShowBasic] = useState(false);

    const data = [
        { key: `/`, value: "Home" },
        { key: `/about`, value: "About" },
        { key: `/contact`, value: "contact" },
        { key: `/loginpage`, value: "login" },
    ]
    const mapdata = data.map(({ key, value }, index) => {
        return <MDBNavbarItem key={index}>
            <Link className='nav-link ' to={key}>
                {value}
            </Link>
        </MDBNavbarItem>
    });
    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            {mapdata}
                        </MDBNavbarNav>



                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default HeaderComponent;




// import React, { useState } from 'react';
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
// import { Link } from 'react-router-dom';

// const HeaderComponent = () => {
//     const [showBasic, setShowBasic] = useState(false);
//     const menuItems = [
//         {
//             title: 'Home',
//             url: `/`,
//         },
//         {
//             title: 'about',
//             url: `/about`,
//         },
//         {
//             title: 'contact',
//             url: `/contact`,
//         },

//         {
//             title: 'Services',
//             url: '/services',
//             submenu: [
//                 {
//                     title: 'web design',
//                     url: 'web-design',
//                 },
//                 {
//                     title: 'web development',
//                     url: 'web-dev',
//                 },
//                 {
//                     title: 'SEO',
//                     url: 'seo',
//                 },
//             ],
//         },
//         , {
//             title: 'Tops',
//             url: '/tops',
//             submenu: [
//                 {
//                     title: 'web design',
//                     url: 'web-design',
//                 },
//                 {
//                     title: 'web development',
//                     url: 'web-dev',
//                 },
//                 {
//                     title: 'SEO',
//                     url: 'seo',
//                 },
//             ],
//         },

//     ];
//     const MenuData = menuItems.map((data, index) => {
//         // console.log(data.submenu);
//         // jyare submenu madse tyare
//         if (data.submenu != undefined) {
//             var submenudata = data.submenu.map((submenu, index) => {
//                 console.log("called inner loop", submenu);
//                 return <MDBDropdownItem key={index}>
//                     <MDBNavbarLink className='nav-link' href={submenu.url}>
//                         {submenu.title}
//                     </MDBNavbarLink>
//                 </MDBDropdownItem>
//             })
//         }
//         // jyare submenu madse nahi  tyare
//         if (data.submenu == null) {
//             // console.log('nandan', data.title);
//             // console.log('nandan', data.url);
//             return <MDBNavbarItem key={index}>
//                 <MDBNavbarLink className='nav-link' href={data.url}>
//                     {data.title}
//                 </MDBNavbarLink>
//             </MDBNavbarItem>
//         } else {
//             return < MDBNavbarItem key={index} >
//                 <MDBDropdown>
//                     <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                         {data.title}
//                     </MDBDropdownToggle>
//                     <MDBDropdownMenu>
//                         {submenudata}
//                     </MDBDropdownMenu>
//                 </MDBDropdown>
//             </ MDBNavbarItem>
//         }
//     })


//     return (
//         <>
//             <MDBNavbar expand='lg' light bgColor='light'>
//                 <MDBContainer fluid>
//                     <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    // <MDBNavbarToggler
                    //     aria-controls='navbarSupportedContent'
                    //     aria-expanded='false'
                    //     aria-label='Toggle navigation'
                    //     onClick={() => setShowBasic(!showBasic)}
                    // >
                    //     <MDBIcon icon='bars' fas />
                    // </MDBNavbarToggler>

                    // <MDBCollapse navbar show={showBasic}>
//                         <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//                             {MenuData}
//                         </MDBNavbarNav>

//                         <MDBBtn color='primary'><MDBNavbarLink href={loginpage}>login</MDBNavbarLink></MDBBtn>
//                     </MDBCollapse>
//                 </MDBContainer>
//             </MDBNavbar>
//         </>
//     );
// };

// export default HeaderComponent;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBCollapse,
//     MDBBtn,
// } from 'mdb-react-ui-kit';

// const Headerfilenew = () => {
//     const data = [
//         { key: `/`, value: "Home" },
//         { key: `/about`, value: "About" },
//         { key: `/contact`, value: "Contact" }
//     ];

//     const mapdata = data.map(({ key, value }, index) => (
//         <MDBNavbarItem key={index}>
//             <MDBNavbarItem className='nav-link' key={index}>
//                 <NavLink
//                     to={key}
//                     className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active_link" : ""} >
//                     {value}
//                 </NavLink>
//             </MDBNavbarItem>
//         </MDBNavbarItem>
//     ));
//     return (
//         <>
//             <MDBNavbar expand='lg' light bgColor='light' className='sticky-top'>
//                 <MDBContainer fluid>
//                     <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//                     <MDBCollapse navbar children=''>
//                         <MDBNavbarNav className='ms-auto  w-auto me-3  mb-2 mb-lg-0'>
//                             {mapdata}
//                         </MDBNavbarNav>
//                     </MDBCollapse>
//                 </MDBContainer>
//             </MDBNavbar>
//         </>
//     );
// };

// export default Headerfilenew;