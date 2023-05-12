import React, { createElement, useState } from 'react';

const CustomHook = (intval, initError) => {
    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initError)

    // let creatspan = createElement("span", null, "nandan");
    // let creatspan = createElement( “h1”, null, “First Reach Element”);



    function isValidEmail(email) {
        return /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
    }

    const handleChange = (e) => {
        console.log(e.target);
        console.log(e.target.type);

        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        let spanId = e.target.name + "error";
        // console.log(e.target.className);


        if (e.target.className === "logininput") {
            // console.log("error");
            if (e.target.value == "") {
                setError({ ...errors, [spanId]: "this fild is required" });
            } else {
                setError({ ...errors, [spanId]: "" });
                if (e.target.type == "email") {
                    if (!isValidEmail(e.target.value)) {
                        console.log(" 2 inside of add");
                        setError({ ...errors, [spanId]: "Email is invalid" })
                    } else {
                        setError({ ...errors, [spanId]: "" })
                    }
                }
            }
        }




    }
    return {
        handleChange,
        inp,
        errors

    }
};

export default CustomHook;





// import React, { useState } from 'react';

// const CustomHook = () => {
//     var inputget = document.getElementsByClassName("logininput");
//     // var inputget = document.querySelectorAll("[required]");
//     // var inputarr = [inputget]
//     // console.log(inputarr);
//     // var id = Math.floor(Math.random() * 1000)

//     for (let index = 0; index < inputget.length; index++) {
//         inputget[index].addEventListener('blur', function () {
//             console.log(inputget[index]);
//             // console.log(e.target);
//             // console.log(inputget[index]);

//             // // console.log("called");
//             var txt = document.createElement("SPAN");
//             var name = this.getAttribute('name');
//             var error = name + "error";

//             // txt.style.cssText = `
//             //     color:red;
//             //   background:black;
//             // `;
//             txt.style.cssText = "color: red;  margin: 5px 0";
//             txt.innerHTML = `* this filed ${error}`;
//             if (inputget[index].value == "") {
//                 if (inputget[index].nextSibling === null || inputget[index].nextSibling.nodeName !== "SPAN") {
//                     // value null male to OR value ni pachad span no made to
//                     // inputget[index].parentNode.appendChild(txt);
//                     // console.log("called");
//                     inputget[index].insertAdjacentElement("afterend", txt)
//                 }
//             } else {
//                 if (inputget[index].nextSibling !== null && inputget[index].nextElementSibling.nodeName === "SPAN") {
//                     // value null na  male to  ane value ni pachad span made to
//                     inputget[index].nextSibling.remove()
//                 }
//             }




//         })

//     }
//     return {
//         CustomHook

//     };
// };

// export default CustomHook;