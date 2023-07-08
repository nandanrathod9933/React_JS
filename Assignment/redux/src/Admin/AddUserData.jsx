import React from 'react';
import CustomHook from '../Hook/customHook';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddUserData = () => {


    const { handleChange, inp, errors } = CustomHook({ role: '2' }, {})
    const [userName, setuserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')
    // const [loginMsg, setLoginMsg] = useState('')


    // const navigate = useNavigate()

    // const [errorMsg, setErrorMsg] = useState(false);
    const registrationdata = (event) => {
        event.preventDefault()
        console.log("called");
        console.log("loginpage", inp);
        console.log("loginpage", errors);

        axios.post('http://localhost:5000/userdata', inp).then(function (response) {

            console.log(response);
            setuserName('');
            setuserEmail('');
            setuserPassword('');
        }).catch(function (error) {
            console.log(error);
        });





        // fetch("http://localhost:5000/userdata", {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     // mode: "same-origin", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(inp)
        // }).then((res) => res.json()).then((result) => {
        //     console.log(result);
        //     setuserName('')
        //     setuserEmail('')
        //     setuserPassword('')
        //     // Navigate("/login")
        // })

    }

    return (
        <>

            <div className="form-container sign-up-container" >
                {/* {JSON.stringify(errors)}
                {JSON.stringify(inp)} */}
                <form method='post' onSubmit={registrationdata}>
                    <div className="flex">
                        <div className="col">
                            <h1 className='text-center'>Add User Data</h1>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="col-12">
                            <div className="flex">
                                <div className="col-4 mx-auto my-4">
                                    <input type="text" className='logininput form-control' onBlur={handleChange} onChange={(e) => setuserName(e.target.value)} placeholder="Enter your username" id='uname' value={userName} name='name' />
                                    {errors ? <span>{errors.nameerror}</span> : <></>}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-4 mx-auto my-4">
                                    <input type="email" placeholder="Enter your Email" onBlur={handleChange} onChange={(e) => setuserEmail(e.target.value)} className='logininput form-control' id='uemail' name='email' value={userEmail} />
                                    {errors ? <span>{errors.emailerror}</span> : <></>}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-4 mx-auto my-4">
                                    <input type="password" placeholder="Enter your Password" onBlur={handleChange} onChange={(e) => setuserPassword(e.target.value)} className='logininput form-control' id='upass' name='password' value={userPassword} />
                                    {errors ? <span>{errors.passworderror}</span> : <></>}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-4 mx-auto my-4">
                                    <div className="flex">
                                        <div className="col text-start">
                                            <button type='submit' className='btn btn-primary '>Submit</button>
                                        </div>
                                        <div className="col text-end">
                                            <Link to="/admin/adminallusers" className="btn btn-primary " >back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </>
    );
};

export default AddUserData;