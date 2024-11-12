// Google authentication
const passport = require("../strategies/main");
const db = require("../db/pool");
const { REDIRECTURL } = process.env;
const express = require("express");
const googleRouter = express.Router();


  googleRouter.get(
    "/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );

  googleRouter.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/api/users/failedLogin",
    }),
    async function (req, res) {
      try {
        const result = await db.query(
          "SELECT * FROM users WHERE google_profile ->> 'sub' = $1",
          [req.user.sub]
        );
        if (result.rows.length > 0) {
          return res.status(200).redirect(REDIRECTURL);
        }

        await db.query(
          "INSERT INTO users (google_profile) VALUES ($1) RETURNING *",
          [req.user]
        );

        res.status(200).redirect(REDIRECTURL);
        // res.status(200).json({ message: "Logged in", user: req.user });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error logging in" });
      }
    }
  );

  googleRouter.get("/auth/getGoogleUser", (req, res) => {
    console.log(req.session);
    console.log(req.session.passport);
    if (!req.user) {
      res.status(401).json({ message: "Not logged in" });
    } else {
      res.status(200).json({ user: req.user });
    }
  })
  
  module.exports = googleRouter
