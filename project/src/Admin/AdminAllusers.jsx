import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminAllusers = () => {

    const [loginMsg, setLoginMsg] = useState('');
    const [loader, setLoader] = useState(false);
    const [allUsers, setAllUsers] = useState("");


    // const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState(false);

 


    useEffect(() => {
        LoginData()
    }, []);
    const LoginData = async (event) => {

        try {
            const response = await axios.get("http://localhost:5000/userdata")

                .then((response) => {
                    // console.log(response);
                    if (response.status == 200) { //server connecte thai tyare erroe show thase
                        // console.log(response.data);
                        // console.log(response.data[0]);
                        // console.log(response.data[1]);
                        // console.log(response.data[2]);
                        // console.log(response.data[3]);

                        let allUsersDataList = ""
                        allUsersDataList = Object.entries(response.data).map(([key, value], i) => {
                            // console.log(key);
                            // console.log(value);
                            // console.log(i);
                            return (
                                <tr key={i}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td className='text-center'><Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>edit </Link></td>
                                    <td className='text-center'><Link className='btn btn-danger'>delete </Link></td>
                                </tr>);
                        });
                        setAllUsers(allUsersDataList);
                        setLoader(true);



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
            <section>
                <h2 className='text-center text-capitalize fs-1'>user data</h2>

                <table className='table mt-5  table-bordered border-dark' >
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th>No.</th>
                            <th className='text-center' >Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>password</th>
                            <th className='text-center' colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loader ? allUsers : <tr><td colSpan={5}>"data"</td></tr>}


                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AdminAllusers;