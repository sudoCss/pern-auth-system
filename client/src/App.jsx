import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { useTheme, useThemeUpdate } from "./contexts/Theme";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<RestrictedRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
