import React, { createElement, useEffect, useState } from 'react';
import "./01LoginComponent.css"
import CustomHook from '../Hook/customHook';
import { Link } from 'react-router-dom';


const LoginCompo = () => {
    const { handleChange, inp, errors } = CustomHook({},)

    // let creatspan = createElement("span", null, `${errors.name}`);

    const [btnclick, setbtnclick] = useState(false);

    const signInBtn = () => {
        // console.log("called");
        setbtnclick(!btnclick);
    }




    // useEffect(() => {
    //     CustomHook(".logininput")
    // })

    return (
        <>
            {/* {creatspan} */}
            <section className='login_sec'>

                <Link to="/" className='home_link'><i className="fa-solid fa-2x fa-house"></i></Link>
                <div className={btnclick ? "container  right-panel-active " : "container"} id="container">
                    <div className="form-container sign-in-container">
                        <form>
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
                            <button >Sign In</button>
                        </form>
                    </div>
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Sign Up</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="social"><i className="fab fa-google"></i></a>
                                <a href="#" className="social"><i className="fab fa-github"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" className='logininput' onBlur={handleChange} placeholder="Name" id='uname' name='username' />
                            {errors ? <span>{errors.usernameerror}</span> : <></>}
                            <input type="email" placeholder="Email" onBlur={handleChange} className='logininput' id='uemail' name='useremail' />
                            {errors ? <span>{errors.useremailerror}</span> : <></>}
                            <input type="password" placeholder="Password" onBlur={handleChange} className='logininput' id='upass' name='userpassword' />
                            {errors ? <span>{errors.useremailerror}</span> : <></>}
                            <button >Sign Up</button>
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


        </>
    );
};

export default LoginCompo;
