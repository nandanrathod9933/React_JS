import React, { Component } from 'react';
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



class header extends Component {
    render() {
        return (
            <>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
                        {/* 
                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler> */}

                        <MDBCollapse navbar show>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <Link to='/' className='nav-link active'>Home</Link >

                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link to='/about' className='nav-link'> about</Link >

                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <Link to='/examples' className='nav-link'> Example</Link >
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Dropdown
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Action</MDBDropdownItem>
                                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                        Disabled
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>

                            {/* <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form> */}
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </>
        );
    }
}

export default header;