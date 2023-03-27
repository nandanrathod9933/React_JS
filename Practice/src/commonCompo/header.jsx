import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function HeaderCompo() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <Link to='/' className='nav-link active'>Home</Link >

                        {/* <MDBNavbarLink active aria-current='page' href='/'>
                            Home
                        </MDBNavbarLink> */}
                        <Link to='/about' className='nav-link'> about</Link >
                        <Link to='/examples' className='nav-link'> Example</Link >
                        {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
                        <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                        <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                            Disabled
                        </MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}