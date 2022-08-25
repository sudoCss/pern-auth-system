import { Router } from "express";
import { login, logout, protectedInfo, register } from "../controllers/auth.js";
import userAuthMiddleware from "../middlewares/auth.js";
import { validationMiddleware } from "../middlewares/validation.js";
import { loginValidation, registerValidation } from "../validators/auth.js";

const router = Router();

router
    .route("/register")
    .post(registerValidation, validationMiddleware, register);

router.route("/login").post(loginValidation, validationMiddleware, login);

router.route("/protected-info").get(userAuthMiddleware, protectedInfo);

router.route("/logout").get(logout);

export default router;
