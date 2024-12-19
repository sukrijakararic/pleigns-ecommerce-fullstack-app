const passport = require("../strategies/main");
const express = require("express");
const githubRouter = express.Router();


githubRouter.get("/github", passport.authenticate("github", { scope: ["user"] }));

githubRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api/users/failedLogin",
    successRedirect: "/",
  })
);

module.exports= githubRouter;