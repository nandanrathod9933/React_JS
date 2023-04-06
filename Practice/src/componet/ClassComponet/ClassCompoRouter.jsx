import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from "./ClassCompoMenu.jsx";
import ClassCompoIntro from "./01ClassCompoIntro.jsx"
import ClassCompoJSXExample from "./02ClassCompoJSXExample.jsx"
import ClassCompoConstructor from "./03ClassCompoConstructor.jsx"
import ClassCompoState from "./04ClassCompoState.jsx"
import ClassCompoProse from "./05ClassCompoProse.jsx"
import ClassCompostatelifecycle from "./07ClassCompostatelifecycle.jsx"
import ClassCompostatelifecycleLoader from "./08ClassCompostatelifecycleLoader.jsx"
import ClassCompoConditionalRendering from "./10ClassCompoConditionalRendering.jsx"
import ClassCompoListKeyMap from "./11ClassCompoListKeyMap.jsx"
import ClassCompoListKeyMapExample from "./12ClassCompoListKeyMapExample.jsx"
import ClassCompoDynamicSubMenu from "./13ClassCompoDynamicSubMenu.jsx"

class classCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<ClassCompoMenu />}>
                        <Route path='/classcompointro' element={<ClassCompoIntro />} />
                        <Route path='/classcompojsx' element={<ClassCompoJSXExample />} />
                        <Route path='/classcompoconstructor' element={<ClassCompoConstructor />} />
                        <Route path='/classcompostate' element={<ClassCompoState />} />
                        <Route path='/classcompoprose' element={<ClassCompoProse />} />
                        <Route path='/classcompostatelifecycle' element={<ClassCompostatelifecycle />} />
                        <Route path='/classcompostatelifecycleloader' element={<ClassCompostatelifecycleLoader />} />
                        <Route path='/classcompoconditionalrendering' element={<ClassCompoConditionalRendering />} />
                        <Route path='/classcompolistkeymap' element={<ClassCompoListKeyMap />} />
                        <Route path='/classcompolistkeymapexample' element={<ClassCompoListKeyMapExample />} />
                        <Route path='/classcompolistkeymapexample' element={<ClassCompoListKeyMapExample />} />
                        <Route path='/classcompodynamicsubmenu' element={<ClassCompoDynamicSubMenu />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default classCompoRouter;