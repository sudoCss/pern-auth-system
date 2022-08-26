import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const RestrictedRoute = () => {
    const { isAuth } = useAuth();
    return !isAuth ? <Outlet /> : <Navigate to="/dashboard" replace={true} />;
};
export default RestrictedRoute;
