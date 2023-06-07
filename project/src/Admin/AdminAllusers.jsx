import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminAllusers = () => {

    const [loginMsg, setLoginMsg] = useState('');
    const [loader, setLoader] = useState(false);
    const [deleteData, setDeleteData] = useState(false);
    const [allUsers, setAllUsers] = useState(null);
    const [SearchData, setSearchData] = useState(null);

    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState(false);




    useEffect(() => {
        LoginData()
    }, [deleteData]);



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
                        setSearchData(response.data);
                        allUsersDataList = Object.entries(response.data).map(([key, value], i) => {
                            // console.log(key);
                            // console.log(value);
                            // console.log(i);
                            console.log(value.password);
                            return (
                                <tr key={key}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td className='text-center'><Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>edit </Link></td>
                                    <td className='text-center'><Link className='btn btn-danger' onClick={() => deletebtn(value.id)}>  delete </Link></td>
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

    const deletebtn = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:5000/userdata/${id}`).then(res => {
            console.log(res);
            // LoginData();
            setDeleteData(true)
            // navigate("/admin/adminallusers")
            // const del = employees.filter(employee => id !== employee.id)
            // setEmployees(del)
        })
    }


    const handleSearch = (event) => {
        console.log("allUsers ", SearchData);
        console.log("handleSearch ", event.target.value);
        const value = event.target.value.toLowerCase();

        if (SearchData) { // Check if SearchData is not null
            const result = SearchData.filter((data) => {
                console.log("val", data);
                return (
                    data.name.toLowerCase().search(value) !== -1 ||
                    data.email.toLowerCase().search(value) !== -1 ||
                    data.id.toString().search(value) !== -1
                );
            });

            console.log(result);
            let allUserDataList = Object.entries(result).map(([key, value], i) => {
                return (
                    <tr key={key}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td className='text-center'><Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>edit </Link></td>
                        <td className='text-center'><Link className='btn btn-danger' onClick={() => deletebtn(value.id)}>  delete </Link></td>
                    </tr>);
            });

            setAllUsers(allUserDataList);
            setLoader(true);
        }
    };

    const handelSearch = (event) => {

        console.log("allUsers", allUsers);
        console.log("input", event.target.value);

        const value = event.target.value.toLowerCase();
        // console.log(value);
        console.log(allUsers);
        const resultj = SearchData.filter((data) => {
            console.log(data);
            return (
                data.name.toLowerCase().search(value) !== -1 ||
                data.email.toLowerCase().search(value) !== -1 ||
                data.id.toString().search(value) !== -1
            );
        });

        console.log(resultj);
        let allUsersDataList = Object.entries(resultj).map(([key, value], i) => {
            // console.log(key);
            // console.log(value);
            // console.log(i);
            return (
                <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td className='text-center'><Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>edit </Link></td>
                    <td className='text-center'><Link className='btn btn-danger' onClick={() => deletebtn(value.id)}>  delete </Link></td>
                </tr>);
        });
        setAllUsers(allUsersDataList);
        setLoader(true);
    }



    return (
        <>
            <section>
                <input type="text" onChange={(event) => handleSearch(event)} />
                <div className="flex my-3">
                    <div className="col-8">
                        <h2 className='text-center text-capitalize'>user data</h2>
                    </div>
                    <div className="col-4">
                        <Link to="/admin/adduserdata" className='btn btn-primary'>add user</Link>
                    </div>

                </div>


                <table className='table mt-5  table-bordered border-dark' >
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th>id.</th>
                            <th className='text-center' >Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>password</th>
                            <th className='text-center' colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loader ? allUsers : <tr><td colSpan={5}>"no data"</td></tr>}


                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AdminAllusers;
