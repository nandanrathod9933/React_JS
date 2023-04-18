import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

const FunctionalCompoState = () => {
    // const [stateNameAnything, setStateData] = useState("0") // string ni andar number na data 
    // const [stateNameAnything, setStateData] = useState("nandan") // string value
    // const [stateNameAnything, setStateData] = useState(0) // number data 
    const [stateNameAnything, setStateData] = useState(true) // boolean value

    const btnclick = () => {
        console.log("called");
        // setStateData(stateNameAnything + 1) // jyare string ma value pase kari hase tyare baju ma lakhase add nahi thai te value ma  (0111111)
        // setStateData(stateNameAnything + "rathod") // jyare string ma value pase te value change thai jase (nandanrathod avi rite lakhai jase)
        // setStateData(stateNameAnything + 1) // jyare number ma value pase kari hase tyare add  thai te value ma (0 ni andar 1 add thata jase  )
        setStateData(!stateNameAnything) // boolean value change thase  agad not ni sign lakhta  (true and flase value change thase)
    }

    return (
        <>
            <div >
                <h2 className='text-capitalize' >useState :</h2>
                <p>The React useState Hook allows us to track state in a function component.</p>
                <p> State generally refers to data or properties that need to be tracking in an application.     </p>

                <p>useState: To manage states. Returns a stateful value and an updater function to update it.</p>
                <img style={{ width: "600px", margin: "0 auto", display: "block" }} className='text-center' src={process.env.PUBLIC_URL + '/img/usestate.png'} alt="" />
            </div>


            <div className='text-center'>
                <p>  {JSON.stringify(stateNameAnything)}</p>
                {/* ternary operator start */}
                <div >{stateNameAnything ? <img src={process.env.PUBLIC_URL + '/img/bulboff.png'} /> : < img src={process.env.PUBLIC_URL + '/img/bulbon.png'} />}</div>
                {/* ternary operator end */}

                <MDBBtn onClick={btnclick} className='my-4'>click</MDBBtn>
            </div>

        </>
    );
};

export default FunctionalCompoState;