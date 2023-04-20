import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffectExample = () => {
    const [formdata, setformdata] = useState({ inputvalue: { firstname: 'test', lastname: "", email: "", password: "", } })
    const [state, setState] = useState({});

    useEffect(() => {
        console.log("called useEffect");
        setformdata((data) => ({
            inputvalue: {}
        }))
    }, [state])

    const inputdata = (event) => {
        // console.log(e.target.value);
        // setformdata(e.target.value)
        setformdata((data) => ({
            // console.log(data);
            inputvalue: { ...data.inputvalue, [event.target.name]: event.target.value }
        }))
    }

    const savedata = (event) => {
        event.preventDefault()
        console.log("called savedata");
        // setbtnclick1(btnclick1.inputdatastore = formdata.formdata)
        setState({
            fname: formdata.inputvalue.firstname,
            lname: formdata.inputvalue.lastname,
            Ename: formdata.inputvalue.email,
            Pname: formdata.inputvalue.password,
        })
    }
 
    return (
        <>
            {JSON.stringify(state)}
            <form action="">
                {/* {JSON.stringify(formdata['firstname'])} */}
                {JSON.stringify(formdata)}
                <input type="text" name='firstname' id='firstname' onChange={inputdata}
                    value={formdata.inputvalue.firstname ? formdata.inputvalue.firstname : ""} />

                <input type="text" name='lastname' id='lastname' onChange={inputdata} value={formdata.inputvalue.lastname ? formdata.inputvalue.lastname : ""} />
                <input type="email" name='email' id='email' onChange={inputdata} value={formdata.inputvalue.email ? formdata.inputvalue.email : ""} />
                <input type="password" name='password' id='password' onChange={inputdata} value={formdata.inputvalue.password ? formdata.inputvalue.password : ""} />
                <button onClick={savedata}>save</button>
            </form>
            {/* <p>inputdata : {formdata}</p> */}
        </>
    );
};

export default FunctionalCompoUseEffectExample;








// import { MDBBtn } from 'mdb-react-ui-kit';
// import React from 'react';

// const FunctionalCompoUseEffectExample = () => {
//     const [btn, setbtn] = React.useState(1)
//     const [apidata, setapidata] = React.useState(null);
//     // const [id, setId] = React.useState([]);


//     React.useEffect(() => {
//         if (btn == null || btn === '') {
//             return;
//         }

//         fetch(`https://jsonplaceholder.typicode.com/todos/${btn}`)
//             .then(results => results.json())
//             .then(data => {
//                 // setapidata(data);
//                 setapidata({ ...apidata, data });
//             });
//     }, [btn]); // useEffect will trigger whenever id is different.
//     return (
//         <>
//             <div>
//                 <h3>count:{btn}</h3>
//                 <MDBBtn value={btn} onClick={e => setbtn(btn + 1)} >click </MDBBtn>

//                 {/* <input value={id} onChange={e => setId(e.target.value)} /> */}
//                 <br />
//                 <pre>{JSON.stringify(apidata)}</pre>
//             </div>
//         </>
//     );
// };

// export default FunctionalCompoUseEffectExample;
