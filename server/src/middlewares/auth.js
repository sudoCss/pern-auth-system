import passport from "passport";

const userAuthMiddleware = passport.authenticate("jwt", { session: false });

export default userAuthMiddleware;
