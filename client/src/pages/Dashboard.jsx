import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboard, logout } from "../api/auth";
import { useAuthUpdate } from "../contexts/Auth";

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const { unAuth } = useAuthUpdate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await dashboard();
                setUsers(data.data);
            } catch (error) {
                logout();
                unAuth();
                navigate("/login");
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h3>
                            {user.id} {user.username}
                        </h3>
                        <span>{user.created_at}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard;
