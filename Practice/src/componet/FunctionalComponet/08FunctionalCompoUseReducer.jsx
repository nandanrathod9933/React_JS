import React from 'react';
import { useReducer } from 'react';


const initval = 0;
function funname(state, action) {
    console.log("State ", state, "action ", action);
    switch (action) {
        case "decrement":
            return state - 1;
        case "increment":
            return state + 1;
        case "reset":
            return 0;

        default:
            console.log("Called by default");
            break;
    }
}
const FunctionalCompoUseReducer = () => {
    const [state, dispatch] = useReducer(funname, initval)
    return (
        <>
            <div className="box text-center" >
                {state}
                <br />
                <button className='btn mx-3' onClick={() => dispatch("decrement")}>decrememnt</button>
                <button className='btn mx-3' onClick={() => dispatch("increment")}>increment</button>
                <button className='btn mx-3' onClick={() => dispatch("reset")}>reset</button>
            </div>
        </>
    );
};

export default FunctionalCompoUseReducer;