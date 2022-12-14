import Bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET } from "../constants/index.js";
import { query } from "../db/index.js";

export const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await Bcrypt.hash(password, 10);

        await query("INSERT INTO users(username, password) VALUES($1, $2);", [
            username,
            hashedPassword,
        ]);

        res.status(201).json({
            success: true,
            message: "User registered successfully.",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    const user = req.user;
    const payload = { id: user.id, username: user.username };
    try {
        const token = jwt.sign(payload, SECRET);
        res.status(200)
            .cookie("jwt", token, {
                httpOnly: true,
                sameSite: "Lax",
                secure: true,
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            })
            .json({ success: true, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const dashboard = async (req, res) => {
    try {
        const authorized = req.cookies["jwt"];
        const jwtData = jwt.verify(authorized, SECRET);
        const { rows } = await query(
            "SELECT id, username, created_at FROM users WHERE NOT id=$1",
            [jwtData.id]
        );
        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.status(200)
            .clearCookie("jwt", {
                httpOnly: true,
                sameSite: "Lax",
                secure: true,
            })
            .json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
