import { MDBBtn } from 'mdb-react-ui-kit';
import React, {useRef, useState } from 'react';

const FunctionalCompoUseRef = () => {
    // Creating a ref object using useRef hook
    const [state, setstate] = useState();
    const focusPoint = useRef(null);
    const DataPoint = useRef(null);
    const onClickHandler = () => {
        setstate(<>
            <p> {focusPoint.current.value} </p>
            <p>{DataPoint.current.innerText}</p>
        </>)
        // "The quick brown fox jumps over the lazy dog";
    };

    return (
        <>
            <p> {state}</p>
            <div>
                <textarea ref={focusPoint} /> <br />
                <p ref={DataPoint}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ex numquam adipisci modi cumque molestias minima ipsa nobis! Totam voluptatum doloremque, unde nulla exercitationem harum blanditiis quam laborum qui fugiat!</p>
                <MDBBtn onClick={onClickHandler}>
                    save
                </MDBBtn>
            </div>

        </>
    );
};

export default FunctionalCompoUseRef;