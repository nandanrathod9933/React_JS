import React, { memo } from 'react';

const FunctionalCompoUseCallbackChlid = ({ state, btnclick }) => {
    console.log("child compo ");
    return (
        <>
            <div className='mt-4'>
                <p><strong>memo:</strong>  React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings.</p>
                <p>child</p>
                <p>number :{state}</p>
                <button onClick={btnclick}>child click </button>
            </div>


        </>
    );
};

export default memo(FunctionalCompoUseCallbackChlid);