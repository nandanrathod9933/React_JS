import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro ">Class Component Introduction</Link></li>
                    <li><Link to="jsxexample ">Class Component JSX</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;