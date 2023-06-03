import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUserData = () => {
    const [errorMsg, setErrorMsg] = useState(false);
    const [editUserData, setEditUserData] = useState();

    const { id } = useParams("");
    useEffect(() => {
        LoginDataByID()
    }, []);
    const LoginDataByID = async (event) => {

        try {
            const response = await axios.get(`http://localhost:5000/userdata/${id}`)

                .then((response) => {
                    if (response.status == 200) { //server connecte thai tyare erroe show thase
                        // console.log(response.data.name);
                        // console.log(response.data.id);
                        // console.log(response.data.email);
                        // console.log(response.data.password);
                        // setEditUserData(response.data)

                        let allUsersDataList = ""
                        allUsersDataList = Object.entries(response.data).map(([key, value], i) => {
                            // console.log(key);
                            // console.log(value);
                            // console.log(i);
                            return (
                                <div key={i}>
                                    <input type="text" value={value} /> <br /> <br />
                                </div>
                            );
                        });
                        setEditUserData(allUsersDataList);

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
            <div>
                {editUserData}
            </div>
        </>
    );
};

export default EditUserData;