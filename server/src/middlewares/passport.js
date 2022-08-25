import passport from "passport";
import { Strategy } from "passport-jwt";
import { SECRET } from "../constants/index.js";
import { query } from "../db/index.js";

export default () => {
    const cookieExtractor = (req) => {
        if (req && req.cookies) return req.cookies["jwt"];
        return null;
    };

    const options = {
        secretOrKey: SECRET,
        jwtFromRequest: cookieExtractor,
    };

    passport.use(
        new Strategy(options, async ({ id }, done) => {
            try {
                const { rows } = await query(
                    "SELECT id, username, email FROM users WHERE id=$1",
                    [id]
                );

                if (rows.length !== 1) {
                    throw new Error("401 Not authorized");
                }

                const user = {
                    id: rows[0].id,
                    username: rows[0].username,
                    email: rows[0].email,
                };

                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        })
    );
};
