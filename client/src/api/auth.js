import axios from "axios";
import { SERVER_URL } from "../constants";

axios.defaults.withCredentials = true;

export const register = async (registerData) =>
    await axios.post(`${SERVER_URL}/register`, registerData);

export const login = async (loginData) =>
    await axios.post(`${SERVER_URL}/login`, loginData);

export const logout = async () => await axios.get(`${SERVER_URL}/logout`);

export const dashboard = async () => await axios.get(`${SERVER_URL}/dashboard`);
