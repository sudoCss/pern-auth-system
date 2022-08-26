import { useEffect, useState } from "react";
import { dashboard } from "../api/auth";

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await dashboard();
            setUsers(data.data);
            console.log(data);
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
