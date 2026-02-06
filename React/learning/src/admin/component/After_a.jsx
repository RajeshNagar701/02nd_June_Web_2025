import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function After_a() {

  const said=sessionStorage.getItem('said');  

  return (
    <div>
        {
            said ?  <Outlet/> : <Navigate to="/admin-login" /> 
        }
    </div>
  )
}

export default After_a