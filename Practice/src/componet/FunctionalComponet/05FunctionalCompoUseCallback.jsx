import React, { useCallback, useContext, useState } from 'react';
import FunctionalCompoUseCallbackChild from './5.1FunctionalCompoUseCallbackChild'


const FunctionalCompoUseCallback = () => {
    const [count, setCount] = useState(0);
    const [state, setstate] = useState(0);

    const btnclick = () => {
        setCount(count + 1)
    }

    const childbtn = useCallback(() => {
        setstate(state + 1)
    }, [state])

    // const childbtn = () => {
    //     setstate(state + 1)
    // }

    console.log("callback com");
    return (
        <>
            <div>
                <p>The React useCallback Hook returns a memoized callback function.</p>
                <p>The useCallback Hook only runs when one of its dependencies update.</p>
                <p>This can improve performance. </p>
            </div>

            <h2>count: {count}</h2>
            <button onClick={btnclick}>click</button>


            <FunctionalCompoUseCallbackChild state={state} btnclick={childbtn}></FunctionalCompoUseCallbackChild>

        </>
    );
};

export default FunctionalCompoUseCallback;





// import React, { useCallback, useState } from 'react';

// const funccount = new Set();
// const FunctionalCompoUseCallback = () => {

//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(0);
//     // const incrementCounter = () => {
//     //     setCount(count + 1);
//     // };
//     // const decrementCounter = () => {
//     //     setCount(count - 1);
//     // };

//     // const incrementNumber = () => {
//     //     setNumber(number + 1);
//     // };

//     const incrementCounter = useCallback(() => {
//         setCount(count + 1);
//     }, [count]);
//     const decrementCounter = useCallback(() => {
//         setCount(count - 1);
//     }, [count]);
//     const incrementNumber = useCallback(() => {
//         setNumber(number + 1);
//     }, [number]);

//     funccount.add(incrementCounter);
//     funccount.add(decrementCounter);
//     funccount.add(incrementNumber);
//     console.log(funccount.size);
//     return (
//         <div className='mb-5'>
//             Count: {count} <br />
//             Number: {number} <br />
//             <button onClick={incrementCounter}>Increase counter</button>
//             <button onClick={decrementCounter}>Decrease Counter</button>
//             <button onClick={incrementNumber}>increase number</button>
//         </div>
//     );
// };

// export default FunctionalCompoUseCallback;