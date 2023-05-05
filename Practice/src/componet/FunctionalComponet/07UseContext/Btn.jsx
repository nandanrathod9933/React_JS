import React, { useContext } from 'react';
import { DarkModeContext } from "./context";

const Btn = () => {
    const Nandan = useContext(DarkModeContext)
    const classname = "nandan-" + Nandan;
    return (
        <div className={classname}>
            <table className='border-primary border'>
                <tr className='border-primary border'>
                    <td>kaushik</td>
                    <td>kaushik</td>
                    <td>kaushik</td>
                </tr>
                <tr className='border-primary border'>
                    <td>kaushik</td>
                    <td>kaushik</td>
                    <td>kaushik</td>
                </tr>
                <tr className='border-primary border'>
                    <td>kaushik</td>
                    <td>kaushik</td>
                    <td>kaushik</td>
                </tr>
                <tr className='border-primary border'>
                    <td>kaushik</td>
                    <td>kaushik</td>
                    <td>kaushik</td>
                </tr>
            </table>
        </div>
    );
};

export default Btn;