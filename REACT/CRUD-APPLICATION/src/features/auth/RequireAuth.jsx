import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import Layout from "../../components/Layout";
import PageLayout from "../PageLayout/PageLayout";

const RequireAuth = () => {
//   const token = useSelector(selectCurrentToken);
  const token = true
  const location = useLocation();

  return token ? (
    <div>
      <PageLayout />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
