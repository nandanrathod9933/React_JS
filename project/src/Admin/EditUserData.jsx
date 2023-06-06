import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomHook from '../Hook/customHook';

const EditUserData = () => {
    const [errorMsg, setErrorMsg] = useState(false);
    const [state, setState] = useState({ name: "", email: "", password: "" });
    const { handleChange, inp, errors, handleUpdate } = CustomHook(state, {})
    const navigate = useNavigate()

    const { id } = useParams("");
    useEffect(() => {
        LoginDataByID()
    }, []);

    const UpdateBtnClick = async () => {
        console.log("called", inp);
        const response = await axios.put(`http://localhost:5000/userdata/${id}`, inp)

            .then((response) => {
                if (response.status == 200) { //server connecte thai tyare erroe show thase
                    navigate("/admin/adminallusers")
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
    }

    const LoginDataByID = async (event) => {

        try {
            const response = await axios.get(`http://localhost:5000/userdata/${id}`)

                .then((response) => {
                    if (response.status == 200) { //server connecte thai tyare erroe show thase

                        console.log(response.data);
                        handleUpdate(response.data)
                        setErrorMsg(false)

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

    };
    return (
        <>
            <div className="py-3">
                {JSON.stringify(inp)}
                {/* {JSON.stringify(state)} */}
                <div className="card ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="row my-2">
                                    <div className="col">
                                        <input type="text" className='form-control' placeholder='Enter Your Username'
                                            value={errorMsg ? "true" : inp.name}
                                            name='name' id='name' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <input type="email" className='form-control' placeholder='Enter Your Username'
                                            value={errorMsg ? "true" : inp.email}
                                            name='email' id='email' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <input type="password" className='form-control' placeholder='Enter Your password'
                                            value={errorMsg ? "true" : inp.password}
                                            name='password' id='password' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <div className="row my-3">
                                            <div className="col">
                                                <input type="button" className="btn btn-primary"
                                                    value="Upadate"
                                                    name='upadate' onClick={UpdateBtnClick} />
                                            </div>
                                            <div className="col">
                                                <Link className="btn btn-primary" to="/admin/adminallusers">Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditUserData;