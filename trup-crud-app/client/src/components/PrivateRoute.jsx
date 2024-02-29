// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
// }

import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PrivateRoute
