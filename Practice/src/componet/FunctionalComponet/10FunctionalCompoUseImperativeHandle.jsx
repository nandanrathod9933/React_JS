// import React, { useEffect, useRef } from 'react'
// import { useState } from 'react';
// import ChildComponent from './11useImperativeHandleChild.jsx';

// const ParentComponent = (props) => {
//     const [ele, setEle] = useState();
//     const childRef = useRef();

//     useEffect(() => {

//     }, [ele])

//     const parentFunction = async (data) => {
//         console.log("called parentFunction", data);
//         await setEle(data)
//     }

//     const resetTable = () => {
//         setEle([,])
//     }

//     return (
//         <div className='Wrapper mt-5'>
//             {(ele && ele.length) ?
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>col-1</th>
//                             <th>col-2</th>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>{ele[0]}</td>
//                         <td>{ele[1]}</td>
//                     </tr>
//                     <tr>
//                         <td>{ele[2]}</td>
//                         <td>{ele[3]}</td>
//                     </tr>
//                 </table> : "no data"}

//             <div className="row mt-5">
//                 <div className="col">
//                     <button className='btn mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>
//                     <button className='btn ms-5' onClick={resetTable} >Reset</button>
//                 </div>
//             </div>

//             <div className="Remaining_details mt-5">
//                 <ChildComponent onAddHandler={parentFunction} ref={childRef} />
//             </div>

//         </div>
//     )
// }

// export default ParentComponent;




import React, { useRef, useState } from 'react';
import ChildComponent from "./11useImperativeHandleChild"

const FunctionalCompoUseImperativeHandle = () => {
    const ref = useRef();
    const [data, setdata] = useState()
    const clickbtn = (data) => {
        console.log(data);
        setdata(data * 10)
    }
    return (
        <>
            <div>
                <p>ParentComponent :    {data}</p>

                <button className='btn btn-dark' onClick={() => ref.current.chlidclick()}>click</button>
            </div>
            <ChildComponent btnclick={clickbtn} ref={ref}></ChildComponent>
        </>
    );
};

export default FunctionalCompoUseImperativeHandle;