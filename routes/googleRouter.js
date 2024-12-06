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
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        req.user.email,
      ]);
      if (result.rows.length > 0) {
        return res.status(200).redirect(REDIRECTURL);
      }

      const insertedUser = await db.query(
        "INSERT INTO users (email, firstname, lastname, google_profile) VALUES ($1, $2, $3, $4) RETURNING *",
        [req.user.email, req.user.given_name, req.user.family_name, req.user]
      );

      const userId = insertedUser.rows[0].id;
      const created = new Date();
      const modified = new Date();

      // Create a new cart for the user
      await db.query(
        "INSERT INTO carts (userid, created, modified) VALUES ($1, $2, $3)",
        [userId, created, modified]
      );

      res.status(200).redirect(REDIRECTURL);
      // res.status(200).json({ message: "Logged in", user: req.user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error logging in" });
    }
  }
);

module.exports = googleRouter;