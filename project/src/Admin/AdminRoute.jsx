import React from 'react';
import AdminMenu from "./AdminMenu";
import AdminAllusers from './AdminAllusers';
import AdminDashboard from './AdminDashboard';
import { Navigate, Route, Routes } from 'react-router-dom';

const AdminRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminMenu />}>
                    <Route path="adminallusers" element={<AdminAllusers />} />
                    <Route path="admindashboard" element={<AdminDashboard />} />
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