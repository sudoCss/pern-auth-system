import { Router } from "express";
import { dashboard, login, logout, register } from "../controllers/auth.js";
import userAuthMiddleware from "../middlewares/auth.js";
import { validationMiddleware } from "../middlewares/validation.js";
import { loginValidation, registerValidation } from "../validators/auth.js";

const router = Router();

router
    .route("/register")
    .post(registerValidation, validationMiddleware, register);

router.route("/login").post(loginValidation, validationMiddleware, login);

router.route("/dashboard").get(userAuthMiddleware, dashboard);

router.route("/logout").get(logout);

export default router;
