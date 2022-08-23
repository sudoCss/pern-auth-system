// 3rd party
import Express from "express";

// constants
import { PORT } from "./constants/index.js";

// routes
import authRouter from "./routes/auth.js";

const app = Express();

app.use(Express.json());

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
