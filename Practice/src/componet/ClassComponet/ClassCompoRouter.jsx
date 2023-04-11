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
import ClassCompoSpreadRest from "./14ClassCompoSpreadRest.jsx"
import ClassCompoControlledCompo from "./15ClassCompoControlledCompo.jsx"
import ClassCompoControlledCompoObject from "./15.1ClassCompoControlledCompoObject.jsx"
import ClassCompoUnControlledCompo from "./16ClassCompoUnControlledCompo.jsx"
import ClassCompoCompositionVsInheritance from "./17ClassCompoCompositionVsInheritance..jsx"
import ClassCompoStateLifting from "./19ClassCompoStateLifting/01Mainfile.jsx"
import ClassCompoStateLiftingExample from "./19ClassCompoStateLifting/mainfile.jsx"
import ClassCompoHOC from "./20HOCINClassCompo/01MainCompo.jsx"
import FetchAPI from "./21FetchAPI.jsx"

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
                        <Route path='/classcompospreadrest' element={<ClassCompoSpreadRest />} />
                        <Route path='/classcompocontrolledcompo' element={<ClassCompoControlledCompo />} />
                        <Route path='/classcompocontrolledcompoobject' element={<ClassCompoControlledCompoObject />} />
                        <Route path='/classcompouncontrolledcompo' element={<ClassCompoUnControlledCompo />} />
                        <Route path='/classcompocompositionvsinheritance' element={<ClassCompoCompositionVsInheritance />} />
                        <Route path='/classcompocompostatelifting' element={<ClassCompoStateLifting />} />
                        <Route path='/classcompocompostateliftingexample' element={<ClassCompoStateLiftingExample />} />
                        <Route path='/classcompohoc' element={<ClassCompoHOC />} />
                        <Route path='/fetchapi' element={<FetchAPI />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default classCompoRouter;