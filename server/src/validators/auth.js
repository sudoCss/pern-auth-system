import { check } from "express-validator";
import { query } from "../db/index.js";

const username = check("username")
    .isLength({ min: 4, max: 32 })
    .withMessage(
        "Username must be at least 4 characters and at most 32 characters long."
    );

const usernameAlreadyExists = check("username").custom(async (value) => {
    const { rows } = await query("SELECT * FROM users WHERE username=$1", [
        value,
    ]);

    if (rows.length) {
        throw new Error("Username already exists.");
    }
});

const password = check("password")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password has to be 8-64 characters long.");

const email = check("email")
    .isEmail()
    .withMessage("Pleas provide a valid email");

const emailAlreadyExists = check("email").custom(async (value) => {
    const { rows } = await query("SELECT * FROM users WHERE email=$1", [value]);

    if (rows.length) {
        throw new Error("Email already exists.");
    }
});

export const registerValidation = [
    username,
    email,
    password,
    emailAlreadyExists,
];
