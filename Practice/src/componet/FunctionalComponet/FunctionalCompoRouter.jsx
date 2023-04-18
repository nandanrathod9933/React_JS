import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx'
import WelcomeToFunctionalCompo from './01WelcomeToFunctionalCompo.jsx'
import FunctionalCompoState from './02FunctionalCompoState.jsx'
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx'

const FunctionalCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<FunctionalCompoMenu />}>
                    <Route path='/welcometofunctionalcompo' element={<WelcomeToFunctionalCompo />} />
                    <Route path='/functionalcompostate' element={<FunctionalCompoState />} />
                    <Route path='/functionalcompouseeffect' element={<FunctionalCompoUseEffect />} />

                </Route>

            </Routes>

        </>
    );
};

export default FunctionalCompoRouter;