import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
    res.end("working!");
});

export default router;
