import React, { createContext, useState } from 'react';
export const DarkModeContext = createContext();

const Context = ({ children }) => {
    const [mode, setmode] = useState("light")
    return (
        <>
            <DarkModeContext.Provider value={mode}>
                {children}
                <div className='wrapper'>
                    <input type="checkbox" name="" id="" checked={mode === "dark"}
                        onChange={(e) => {
                            setmode(e.target.checked ? "dark" : "light")
                        }}
                    />
                </div>
                {mode}
            </DarkModeContext.Provider>
        </>
    );
};

export default Context;