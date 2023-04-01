import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx'
import ClassCompoIntro from './01ClassCompoIntro.jsx'
import ClassCompoJsxExample from './02ClassCompoJsxExample.jsx'

class classComponentRoter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<ClassCompoMenu />} >
                        <Route path='classcompointro' element={<ClassCompoIntro />} />
                        <Route path='jsxexample' element={<ClassCompoJsxExample />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default classComponentRoter;