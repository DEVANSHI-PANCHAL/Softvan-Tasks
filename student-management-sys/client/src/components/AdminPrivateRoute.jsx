import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser && currentUser.data && currentUser.data.user && currentUser.data.user.role === 'ADMIN') {
    return <Outlet />;
  } else {
    return <Navigate to='/sign-in' />;
  }
}
