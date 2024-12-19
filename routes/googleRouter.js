// Google authentication
const passport = require("../strategies/main");
const express = require("express");
const googleRouter = express.Router();


googleRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

googleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/users/failedLogin",
  }),
  (req, res) => {
    console.log("req.user: ", req.user);
    req.session.user = req.user;
    res.status(200).redirect("/");
  }
);

module.exports = googleRouter;