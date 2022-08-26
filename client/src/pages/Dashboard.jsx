const Dashboard = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h3>{user.username}</h3>
                        <span>
                            {user.username}clicked you {user.clicks} times.
                        </span>
                        <span>
                            You clicked {user.username} {user.clicked} times.
                        </span>
                        <button>Click</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard;
