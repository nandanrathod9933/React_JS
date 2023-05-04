import React, { useContext } from 'react';
import { DarkModeContext } from './context';

const Form = () => {
    const DarkMode = useContext(DarkModeContext);
    const classname = "nandan-" + DarkMode;
    return (
        <>
            <div className={classname} >
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quia autem distinctio a excepturi consequatur aut fugit quas, tempora, illum voluptate rem corrupti aperiam, expedita accusantium nulla facilis tenetur commodi.</p>
                <form action="">
                    <input type="text" />
                    <button>sumbit</button>
                </form>
            </div>
        </>
    );
};

export default Form;