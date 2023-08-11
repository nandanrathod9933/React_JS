import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "./../Reducer/users";
import HeaderComponent from '../CommonCompo/HeaderCompo';

const GetUserData = () => {
    const users = useSelector(selectUser);
    return (
        <>
            <HeaderComponent />
            <div>
                {JSON.stringify(users)}

                <table>
                    <thead>
                        <tr>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default GetUserData;