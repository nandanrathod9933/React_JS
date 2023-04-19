import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const FunctionalCompoUseLayoutEffect = () => {
    const [state, setstate] = useState(0)
    useLayoutEffect(() => {
        console.log("called uselayouteffect");
        // setstate("rathod")

    }, []);



    useEffect(() => {
        console.log("called useEffect ");
        // setstate("rathodnandan")

    }, [state]);



    let btnclick = () => {
        console.log("called");
        setstate(state + 1)

    }
    let btnclick2 = () => {
        console.log("called");
        // setstate(state + 1)

    }
    return (
        <>
            <p>useLayoutEffect :render thai aeni pela j change batvase </p>
            <p>useLayoutEffect and useEffect mathi pela useLayoutEffect method call thase </p>
            <p>the useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously. </p>
            <p>the useLayoutEffect actually runs before the useEffect runs</p>
            {state}
            <MDBBtn onClick={btnclick}>click</MDBBtn>
            <MDBBtn onClick={btnclick2}>click</MDBBtn>
        </>
    );
};

export default FunctionalCompoUseLayoutEffect;




