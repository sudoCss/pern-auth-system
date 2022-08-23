import { Router } from "express";
import { getUsers, register } from "../controllers/auth.js";
import { validationMiddleware } from "../middlewares/auth.js";
import { registerValidation } from "../validators/auth.js";

const router = Router();

router.route("/get-users").get(getUsers);

router
    .route("/register")
    .post(registerValidation, validationMiddleware, register);

export default router;
