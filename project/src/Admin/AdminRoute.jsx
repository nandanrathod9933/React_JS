import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminMenu from "./AdminMenu";
import AdminAllusers from './AdminAllusers';
import AdminDashboard from './AdminDashboard';
import EditUserData from './EditUserData.jsx';
import AddUserData from './AddUserData.jsx';

const AdminRoute = () => {
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