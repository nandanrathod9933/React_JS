import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul style={{ width: "70%", margin: "0 auto" }}>
                        <li className='h4 text-capitalize'> <Link to='welcometofunctionalcompo'>functional compo intro</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompostate'>functional compo UseState</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompouseeffect'>functional compo UseEffect</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompouseeffectexample'>functional compo UseEffect example</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompouselayouteffect'>functional compo UseLayoutEffect</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompousecallback'>functional compo UseCallback</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompousememo'>functional compo usememo</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompousecontext'>functional compo usecontext</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompousereducer'>functional compo usereducer</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompouseref'>functional compo useref</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompouseimperativehandle'>functional compo useImperativeHandle</Link> </li>
                        <li className='h4 text-capitalize'> <Link to='functionalcompotodolist'>functional compo todolist</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;