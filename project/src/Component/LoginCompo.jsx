import React, { createElement, useEffect, useState } from 'react';
import "./01LoginComponent.css"
import CustomHook from '../Hook/customHook';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const LoginCompo = () => {
    const { handleChange, inp, errors } = CustomHook({ role: '2' }, {})
    const [userName, setuserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')
    const [loginMsg, setLoginMsg] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['name']);


    const navigate = useNavigate()
    const [btnclick, setbtnclick] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    // useEffect(() => {
    //     // console.log("Called");
    //     const response = axios.get(`http://localhost:5000/userdata`)
    //         .then((response) => {
    //             console.log("called");
    //         })
    // })

    const signInBtn = () => {
        // console.log("called");
        setbtnclick(!btnclick);
    }


    const logindata = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.get(`http://localhost:5000/userdata?email=${inp.email}&password=${inp.password}`)
                .then((response) => {
                    // console.log(response);
                    if (response.status == 200) { //server connecte thai tyare erroe show thase

                        console.log(response);
                        // console.log("nandan", response.data);
                        console.log('cookies', cookies);
                        if (response.data.length > 0) {
                            setCookie('name', response.data[0].name);
                            setCookie('id', response.data[0].id);
                            console.log("cookies", cookies.id);
                            if (response.data[0].role == 1) {
                                navigate("/admin/admindashboard")
                            } else {
                                navigate("/userdashboard")
                            }
                        } else {
                            setLoginMsg("invalid user");
                        }
                        console.log("server connected"); // server connect thai jai to
                    } else {
                        console.log("error while connecting to the server"); // server connect no thai to
                    }


                }).catch((error) => {
                    setErrorMsg(true)
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        // server j call no thai ke server j bandh hoi tyare aa error
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        } catch (error) {
            console.log(error);
        }


        // fetch(`http://localhost:5000/userdata`).then((res) => res.json()).then((result) => {
        //     // console.log(inp.role);
        //     // console.log(result[0].role);
        //     if (result[0].role === 1) {
        //         console.log("admin");
        //     } else {
        //         // console.log("user");
        //     }

        // })

    }
    const registrationdata = (event) => {
        event.preventDefault()
        console.log("called");
        console.log("loginpage", inp);

        // axios.post('http://localhost:5000/userdata', inp).then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // });



        // fetch("http://localhost:5000/userdata", {
        //     method: 'POST',
        //     // mode: 'no-cors',
        //     credentials: 'same-origin',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(inp)
        // }).then((res) => res.json()).then((result) => {
        //     console.log(result);
        // })

        // // fetch('http://localhost:5000/userdata', {
        // //     method: 'POST',
        // //     body: JSON.stringify(inp),
        // //     headers: {
        // //         'Content-Type': 'application/json'
        // //     },
        // // }
        // // ).then((res) => res.json()).then((result) => {
        // //     console.log(result);
        // // })
        // console.log("save data", inp);

        fetch("http://localhost:5000/userdata", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "same-origin", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inp)
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            setuserName('')
            setuserEmail('')
            setuserPassword('')
            // Navigate("/login")
        })

    }







    // useEffect(() => {
    //     CustomHook(".logininput")
    // })


    return (
        <>
            {errorMsg ? <>Error while connecting please try after  some time</> : <>

                <section className='login_sec'>

                    <Link to="/" className='home_link'><i className="fa-solid fa-2x fa-house"></i></Link>
                    <div className={btnclick ? "container  right-panel-active " : "container"} id="container">
                        <div className="form-container sign-in-container">
                            <form method='post' onSubmit={logindata}>
                                <h1>Sign In</h1>
                                {/* {JSON.stringify(inp)} */}
                                {/* {JSON.stringify(errors)} */}
                                <div className="social-container">
                                    <a href="#" className="social"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google"></i></a>
                                    <a href="#" className="social"><i className="fab fa-github"></i></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" onBlur={handleChange} className='logininput' id='lemail' name='email' />
                                {errors ? <span>{errors.emailerror}</span> : <></>}
                                <input type="password" placeholder="Password" onBlur={handleChange} className='logininput' id='lpassword' name='password' />
                                {errors ? <span>{errors.passworderror}</span> : <></>}
                                <a href="#">Forgot your password?</a>
                                <button type='submit'>Sign In</button>
                            </form>
                            {loginMsg ? <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
                                <div id="liveToast" className="toast fade show border border-danger " role="alert" aria-live="assertive" aria-atomic="true">
                                    <div className="toast-header">
                                        <strong className="me-auto">login alert</strong>
                                        <button type="button" data-bs-dismiss="toast" aria-label="Close" className='removebtn' onClick={() => setLoginMsg("")}><i className="fa-solid  fa-xmark"></i></button>
                                    </div>
                                    <div className="toast-body ">
                                        {loginMsg}
                                    </div>
                                </div>
                            </div> : ''}
                        </div>
                        <div className="form-container sign-up-container">
                            <form method='post' onSubmit={registrationdata}>
                                <h1>Sign Up</h1>
                                <div className="social-container">
                                    <a href="#" className="social"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google"></i></a>
                                    <a href="#" className="social"><i className="fab fa-github"></i></a>
                                </div>
                                <span>or use your email for registration</span>
                                <input type="text" className='logininput' onBlur={handleChange} onChange={(e) => setuserName(e.target.value)} placeholder="Name" id='uname' value={userName} name='name' />
                                {errors ? <span>{errors.nameerror}</span> : <></>}
                                <input type="email" placeholder="Email" onBlur={handleChange} onChange={(e) => setuserEmail(e.target.value)} className='logininput' id='uemail' name='email' value={userEmail} />
                                {errors ? <span>{errors.emailerror}</span> : <></>}
                                <input type="password" placeholder="Password" onBlur={handleChange} onChange={(e) => setuserPassword(e.target.value)} className='logininput' id='upass' name='password' value={userPassword} />
                                {errors ? <span>{errors.passworderror}</span> : <></>}
                                <button type='submit'  >Sign Up</button>
                            </form>
                        </div>

                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>Please login with your personal info</p>
                                    <button className="ghost" onClick={signInBtn} id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start your journey with us</p>
                                    <button className="ghost" onClick={signInBtn} id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>}



        </>
    );
};

export default LoginCompo;
