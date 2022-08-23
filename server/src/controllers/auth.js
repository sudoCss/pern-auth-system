import Bcrypt from "bcryptjs";
import { query } from "../db/index.js";

export const getUsers = async (req, res) => {
    try {
        const { rows } = await query("SELECT id, username, email FROM users;");
        res.status(200).json({ success: true, message: { users: rows } });
    } catch (error) {
        console.log(error);
    }
};

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await Bcrypt.hash(password, 10);

        await query(
            "INSERT INTO users(username, email, password) VALUES($1, $2, $3);",
            [username, email, hashedPassword]
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
