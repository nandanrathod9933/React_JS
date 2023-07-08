import React from 'react';

const InputCompo = (props) => {
    return (
        <>
            <input type={props.type} name={props.name} id={props.id} className={props.class} />
        </>
    );
};

export default InputCompo;


