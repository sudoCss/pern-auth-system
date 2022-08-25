import Bcrypt from "bcryptjs";
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

const email = check("email")
    .isEmail()
    .withMessage("Pleas provide a valid email");

const emailAlreadyExists = check("email").custom(async (value) => {
    const { rows } = await query("SELECT * FROM users WHERE email=$1", [value]);

    if (rows.length) {
        throw new Error("Email already exists.");
    }
});

const password = check("password")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password has to be 8-64 characters long.");

const confirmPassword = check("confirmPassword").custom(
    async (confirmPassword, { req }) => {
        const password = req.body.password;
        if (password !== confirmPassword) {
            throw new Error("Passwords must be same");
        }
    }
);

export const registerValidation = [
    username,
    usernameAlreadyExists,
    email,
    emailAlreadyExists,
    password,
    confirmPassword,
];

const usernameIsRegistered = check("username").custom(async (username) => {
    const { rows } = await query("SELECT * FROM users WHERE username=$1;", [
        username,
    ]);

    if (rows.length !== 1) {
        throw new Error("Username is wrong.");
    }
});

const passwordMatches = check("password").custom(async (password, { req }) => {
    try {
        const {
            rows: [user],
        } = await query("SELECT * FROM users WHERE username=$1;", [
            req.body.username,
        ]);

        const isMatch = await Bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Password is wrong.");
        }
        req.user = user;
    } catch (error) {
        throw error;
    }
});

export const loginValidation = [usernameIsRegistered, passwordMatches];
