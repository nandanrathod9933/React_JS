// import React, { forwardRef, useImperativeHandle } from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const ChildComponent = forwardRef((props, ref) => {
//     const [ele, setEle] = useState({});
//     const [ele2, setEle2] = useState({});
//     const [NewArray, setNewArray] = useState({});

//     useImperativeHandle(ref, () => ({
//         getAlert() {
//             let suffRes = shuffle(arr);
//             var index = suffRes.indexOf(1);
//             setEle(suffRes[0]);
//             suffRes.shift(); // for first element
//             // console.log(suffRes);
//             props.onAddHandler(suffRes);
//         },
//     }));


//     const arr = [1, 2, 3, 4, 5, 6];
//     useEffect(() => {
//         let suffRes = shuffle(arr);
//         console.log(suffRes);
//         var index = suffRes.indexOf(1);

//         setEle(suffRes[0]);
//         setEle2(suffRes[1]);
//         suffRes.shift(); // for first element
//         suffRes.shift(); // for second element
//         // console.log(suffRes);
//         props.onAddHandler(suffRes);
//     }, [NewArray, ele]);



//     const shuffle = (array) => {
//         console.log("called inside shuffle");
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//         return array;
//     };

//     const childMethod = () => {
//         console.log("call me");
//     };

//     return (
//         <>
//             Remaining Array Element = {JSON.stringify(ele)},{JSON.stringify(ele2)}
//             <br />
//             <br />
//             All the Values of Array = {(arr)}
//         </>
//     );
// });

// export default ChildComponent;

// useImperativeHandle = jyare child mathi parent ma method mokali hoi tene parent ma accecs karvi hoi tyaree
// // useref = ak tareka link banyega chlid or parent ke bich me 
// // forwardRef = parent ke ref ko chlid ko forward karge kyu karega uski vahi ref child me kya access karna he useme help karega 
// // useImperativeHandle = jo parent ka ref aaye he  use kon konsa access dena he ae useImperativeHandle karega 

import React, { forwardRef, useImperativeHandle, useState } from 'react';

const useImperativeHandleChild = (props, ref) => {
    const [count, setcount] = useState(1);
    useImperativeHandle(ref, () => {
        return {
            chlidclick: () => {
                nandan();
                setcount(count + 1);
                props.btnclick(count)
            }
        }
    })

    const nandan = () => {
        console.log("nandanrathod");
    }

    return (
        <>
            <p>chlid component</p>
            {count}

        </>
    );
};

export default forwardRef(useImperativeHandleChild);