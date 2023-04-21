import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
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

            <div className="row">
                <div className="col-lg-6">
                    <form action="">
                        {/* {JSON.stringify(formdata['firstname'])} */}
                        <p> {JSON.stringify(formdata)}</p>
                        <MDBInput size='lg' label='Firstname' type="text" name='firstname' id='firstname' onChange={inputdata}
                            value={formdata.inputvalue.firstname ? formdata.inputvalue.firstname : ""} className='d-block mt-4 ' />

                        <MDBInput size='lg' label='Lastname' type="text" name='lastname' id='lastname' onChange={inputdata} value={formdata.inputvalue.lastname ? formdata.inputvalue.lastname : ""} className='d-block mt-4' />
                        <MDBInput size='lg' label='Email' type="email" name='email' id='email' onChange={inputdata} value={formdata.inputvalue.email ? formdata.inputvalue.email : ""} className='d-block mt-4' />
                        <MDBInput size='lg' label='Password' type="password" name='password' id='password' onChange={inputdata} value={formdata.inputvalue.password ? formdata.inputvalue.password : ""} className='d-block mt-4' />
                        <MDBBtn onClick={savedata} className='d-block mt-4'>save</MDBBtn>
                    </form>
                </div>
                <div className="col-lg-6">
                    <p>  {JSON.stringify(state)} </p>
                </div>
            </div>

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
