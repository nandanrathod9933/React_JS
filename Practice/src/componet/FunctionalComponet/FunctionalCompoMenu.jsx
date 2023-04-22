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