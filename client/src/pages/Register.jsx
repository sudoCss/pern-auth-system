import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const [success, setSuccess] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await register({
                username,
                password,
                confirmPassword,
            });

            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setError({});
            setSuccess(response);
        } catch (error) {
            setError(error);
        }
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
                <input type="submit" value="Register" />
            </form>
            <ul className="error">
                {/* {error.map((error, index) => {
                    <li key={index}>{error.msg}</li>;
                })} */}
            </ul>
            <p className="success">{success.message}</p>
            <p className="error">{error.message}</p>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};
export default Register;
