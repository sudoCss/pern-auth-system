import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../api/auth";
import { useAuthUpdate } from "../contexts/Auth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();
    const { auth } = useAuthUpdate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const registerResponse = await register({
                username,
                password,
                confirmPassword,
            });

            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setErrors([]);
            setSuccess(registerResponse.message);

            const loginResponse = await login({
                username,
                password,
            });

            setSuccess(loginResponse.message);

            auth();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.errors);
            setSuccess("");
        }
    };
    return (
        <div className="register">
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
                    <span>
                        <label
                            className="show-password"
                            htmlFor="show-password"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </label>
                        <input
                            className="show-password"
                            type="checkbox"
                            name="show-password"
                            id="show-password"
                            checked={showPassword}
                            onChange={() => setShowPassword((prev) => !prev)}
                        />
                    </span>
                </div>
                <input type="submit" value="Register" />
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
            <ul className="error">
                {errors.map((error, index) => {
                    return <li key={index}>{error.msg}</li>;
                })}
            </ul>
            <p className="success">{success}</p>
        </div>
    );
};
export default Register;
