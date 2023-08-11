import React, { useEffect } from 'react';
import HeaderCompo from '../CommonCompo/HeaderCompo.jsx'
import FooterCompo from '../CommonCompo/FooterCompo.jsx'
import FormCompo from '../Componenet/FormCompo.jsx'
import { useDispatch } from 'react-redux';
import { retierveUsers } from '../Action/users.jsx'
const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("useLayoutEffect");
        getUsers()
    })
    async function getUsers() {
        let respo = await dispatch(retierveUsers())
        console.log(respo);
    }

    return (
        <>
            <HeaderCompo />
            <FormCompo />
            <FooterCompo />
        </>
    );
};

export default HomePage;