import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const ProtectedRoute = () => {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
};
export default ProtectedRoute;
