import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { useTheme, useThemeUpdate } from "../contexts/Theme";

const NavBar = () => {
    const { isAuth } = useAuth();
    const { theme } = useTheme();
    const { toggleTheme } = useThemeUpdate();

    return (
        <nav>
            <div className="container nav-links">
                <Link to={"/"}>Home</Link>
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
                        <FaMoon />
                    </div>
                    <ul>
                        {isAuth ? (
                            <>
                                <li>
                                    <Link to={"/dashboard"}>Dashboard</Link>
                                </li>
                                <li>
                                    {/* ??? */}
                                    <Link to={"/logout"}>Logout</Link>
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
