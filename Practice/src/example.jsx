import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class example extends Component {
    render() {
        return (

            <div className='container mt-5'>
                <div className="row ">
                    <div className="col">
                        <h2 className='text-center display-5   '>  Example Component</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <h3 className='text-center display-6 '>
                            <Link to="classcompo "  >Class Component</Link>
                        </h3>

                    </div>
                    <div className="col-6">
                        <h3 className='text-center display-6'>
                            <Link to="functionalcompo"> Functional Component</Link>
                        </h3>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12  ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div >
        );
    }
}

export default example;