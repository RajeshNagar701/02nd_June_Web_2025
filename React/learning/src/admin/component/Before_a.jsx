import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Before_a() {

    const said = sessionStorage.getItem('said');
    return (
        <div>
            {
                said ? <Navigate to="/dashboard" /> : <Outlet />
            }
        </div>
    )
}

export default Before_a