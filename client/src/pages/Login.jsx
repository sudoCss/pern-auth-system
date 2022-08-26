import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefaults();
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Your registered username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                        <label htmlFor="show-password">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </label>
                        <input
                            type="checkbox"
                            name="show-password"
                            id="show-password"
                            checked={showPassword}
                            onChange={() => setShowPassword((prev) => !prev)}
                        />
                    </span>
                </div>
                <input type="submit" value="Login" />
            </form>
            <p>
                Don't have account yet? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};
export default Login;
