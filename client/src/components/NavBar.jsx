import { FaHome, FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/auth";
import { useAuth, useAuthUpdate } from "../contexts/Auth";
import { useTheme, useThemeUpdate } from "../contexts/Theme";

const NavBar = () => {
    const { isAuth } = useAuth();
    const { theme } = useTheme();
    const { toggleTheme } = useThemeUpdate();
    const { unAuth } = useAuthUpdate();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            unAuth();
            navigate("/login");
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <nav>
            <div className="nav-content">
                <Link to={"/"}>
                    <FaHome />
                </Link>
                <div>
                    <div className="theme">
                        <FaSun />
                        <input
                            type="checkbox"
                            name="toggle-theme"
                            id="toggle-theme"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />
                        <label htmlFor="toggle-theme"></label>
                        <FaMoon />
                    </div>
                    <ul>
                        {isAuth ? (
                            <>
                                <li>
                                    <Link to={"/dashboard"}>Dashboard</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
