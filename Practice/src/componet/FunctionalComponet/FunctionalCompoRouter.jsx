import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx'
import WelcomeToFunctionalCompo from './01WelcomeToFunctionalCompo.jsx'
import FunctionalCompoState from './02FunctionalCompoState.jsx'
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx'
import FunctionalCompoUseLayoutEffect from './04FunctionalCompoUseLayoutEffect.jsx'
import FunctionalCompoUseEffectExample from './3.1FunctionalCompoUseEffectExample.jsx'

const FunctionalCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<FunctionalCompoMenu />}>
                    <Route path='/welcometofunctionalcompo' element={<WelcomeToFunctionalCompo />} />
                    <Route path='/functionalcompostate' element={<FunctionalCompoState />} />
                    <Route path='/functionalcompouseeffect' element={<FunctionalCompoUseEffect />} />
                    <Route path='/functionalcompouseeffectexample' element={<FunctionalCompoUseEffectExample />} />
                    <Route path='/functionalcompouselayouteffect' element={<FunctionalCompoUseLayoutEffect />} />

                </Route>

            </Routes>

        </>
    );
};

export default FunctionalCompoRouter;