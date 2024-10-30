const express = require("express");
const passport = require("../strategies/main");
const db = require("../db/pool");

module.exports = (app) => {
  app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

  app.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failedLogin",
    }),
    async function (req, res) {
      try {
        const result = await db.query(
          "SELECT * FROM users WHERE id = $1",
          [req.user.id]
        );
        if (result.rows.length === 0) {
          await db.query(
            "INSERT INTO users (google_profile) VALUES ($1) RETURNING *",
            [req.user]
          );
        }
        res.json({ message: "Logged in", user: req.user });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error logging in" });
      }
    }
  );
};
