const passport = require("../strategies/main");
const express = require("express");
const githubRouter = express.Router();
const { REDIRECTURL } = process.env;

githubRouter.get("/github", passport.authenticate("github", { scope: ["user"] }));

githubRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api/users/failedLogin",
  }),
  (req, res) => {
    res.cookie("token", req.user.token);
    res.status(200).redirect(REDIRECTURL);
  });

module.exports= githubRouter;