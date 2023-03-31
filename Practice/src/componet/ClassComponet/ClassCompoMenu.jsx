import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul >
                    <li className='h4 text-capitalize'> <Link to='classcompointro'>class compoent intro</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompojsx'>class compoent JSX</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompoconstructor'>class compoent Constructor</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompostate'>class compoent State</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompoprose'>class compoent Prose</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompostatelifecycle'>class compoent state life cycle</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompostatelifecycleloader'>class compoent state life cycle loader</Link> </li>
                    <li className='h4 text-capitalize'> <Link to='classcompoconditionalrendering'>class compoent ConditionalRendering</Link> </li>
                </ul>
                <div className="row">
                    <div className="col-12 ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoMenu;