// 3rd party
import cookieParser from "cookie-parser";
import cors from "cors";
import Express from "express";
import passport from "passport";

// constants
import { CLIENT_URL, PORT } from "./constants/index.js";
import passportMiddleware from "./middlewares/passport.js";
import authRouter from "./routes/auth.js";

const app = Express();

passportMiddleware();
app.use(Express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

app.use("/api", authRouter);

const serve = () => {
    try {
        app.listen(PORT || 8000, () =>
            console.log(`Server running @ http://localhost:${PORT || 8000}`)
        );
    } catch (error) {
        console.log(`${error.message}`);
    }
};

export default serve;
