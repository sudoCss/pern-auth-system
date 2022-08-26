import { SERVER_URL } from "../constants";

const fetchServer = async (route, method, data) =>
    await fetch(`${SERVER_URL}/${route}`, {
        method,
        credentials: "include",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    }).then((data) => data.json());

export const register = async (registerData) =>
    await fetchServer("register", "POST", registerData);

export const login = async (loginData) =>
    await fetchServer("login", "POST", loginData);

export const logout = async () => await fetchServer("logout", "GET");

export const dashboard = async () => await fetchServer("dashboard", "GET");
