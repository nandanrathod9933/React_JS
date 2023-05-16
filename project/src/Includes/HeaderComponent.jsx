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
        { key: `/apiexample`, value: "FetchApi" },
        // { key: `/loginpage`, value: "login" },
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
            <MDBNavbar expand='lg' light bgColor='light' >
                <MDBContainer fluid >
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
                        <MDBNavbarNav className='ms-auto w-auto me-5 mb-2 mb-lg-0'>
                            {mapdata}

                            <MDBNavbarItem className='ms-5'>
                                <button className='btn  btn-primary' >  <Link to="/loginpage" className='text-light'>login </Link>   </button>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default HeaderComponent;



