import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AdminMenu from "./AdminMenu";
import AdminAllusers from './AdminAllusers';
import AdminDashboard from './AdminDashboard';
import EditUserData from './EditUserData.jsx';
import AddUserData from './AddUserData.jsx';
import { useCookies } from 'react-cookie';

const AdminRoute = () => {
    const [cookies] = useCookies(['name'])
    const navigate = useNavigate();


    useEffect(() => {
        if (!cookies.id && !cookies.name) {
            navigate("/loginpage")
        }
    }, [cookies, navigate])
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminMenu />}>
                    <Route path="adminallusers" element={<AdminAllusers />} />
                    <Route path="admindashboard" element={<AdminDashboard />} />
                    <Route path="edituserdata/:id" element={<EditUserData />} />
                    <Route path="adduserdata" element={<AddUserData />} />
                </Route>
                {/* <Route path="/" element={<Navigate to="/admin/admindashboard" replace />}>
                    <Route path="adminallusers" element={<AdminAllusers />} />
                    <Route path="admindashboard" element={<AdminDashboard />} />
                </Route> */}
            </Routes>
        </>
    );
};

export default AdminRoute;