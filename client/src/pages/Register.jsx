import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefaults();
    };
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Create a username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Create a password..."
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
                <div>
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="confirm-password"
                        placeholder="Confirm your password..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Login" />
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};
export default Register;
