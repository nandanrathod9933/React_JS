import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx'
import WelcomeToFunctionalCompo from './01WelcomeToFunctionalCompo.jsx'
import FunctionalCompoState from './02FunctionalCompoState.jsx'
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx'
import FunctionalCompoUseEffectExample from './3.1FunctionalCompoUseEffectExample.jsx'
import FunctionalCompoUseLayoutEffect from './04FunctionalCompoUseLayoutEffect.jsx'
import FunctionalCompoUseCallback from './05FunctionalCompoUseCallback.jsx'
import FunctionalCompoUseMemo from './06FunctionalCompoUseMemo.jsx'
import FunctionalCompoUseContext from './07UseContext/FunctionalCompoUseContext.jsx'
import FunctionalCompoUseReducer from './08FunctionalCompoUseReducer.jsx'
import FunctionalCompoUseRef from './09FunctionalCompoUseRef.jsx'
import FunctionalCompoUseImperativeHandle from './10FunctionalCompoUseImperativeHandle.jsx'

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
                    <Route path='/functionalcompousecallback' element={<FunctionalCompoUseCallback />} />
                    <Route path='/functionalcompousememo' element={<FunctionalCompoUseMemo />} />
                    <Route path='/functionalcompousecontext' element={<FunctionalCompoUseContext />} />
                    <Route path='/functionalcompousereducer' element={<FunctionalCompoUseReducer />} />
                    <Route path='/functionalcompouseref' element={<FunctionalCompoUseRef />} />
                    <Route path='/functionalcompouseimperativehandle' element={<FunctionalCompoUseImperativeHandle />} />

                </Route>

            </Routes>

        </>
    );
};

export default FunctionalCompoRouter;