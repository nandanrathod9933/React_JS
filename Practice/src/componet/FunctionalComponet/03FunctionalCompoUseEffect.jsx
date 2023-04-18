import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [statename, setname] = useState("")

    useEffect(() => {
        console.log("called useEffect");
        setname(false)
    }, [setname])

    const btnclick = () => {
        console.log("btn");
        setname(!statename)
        console.log(JSON.stringify(statename));

    }

    return (

        <>
            <h2>UseEffect</h2>
            <p> useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function where to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values</p>
            <div className="row border my-5">
                <div className="col-lg-6 border">
                    <img style={{ width: "600px", margin: "0 auto", display: "block" }} className='text-center' src={process.env.PUBLIC_URL + '/img/useeffect.png'} alt="" />
                </div>
                <div className="col-lg-6 border">
                    <img style={{ width: "600px", margin: "0 auto", display: "block" }} className='text-center' src={process.env.PUBLIC_URL + '/img/useeffect2.png'} alt="" />
                </div>
            </div>

            <div className='text-center'>
                {statename ? <h2 className='bg-info text-white text-center d-inline px-3'>React</h2> : <h2 className='bg-success text-white text-center d-inline px-3'>ReactJS</h2>}
            </div>
            <div className='text-center mt-3'> <MDBBtn onClick={btnclick}>change</MDBBtn></div>
        </>
    );
};

export default FunctionalCompoUseEffect;


