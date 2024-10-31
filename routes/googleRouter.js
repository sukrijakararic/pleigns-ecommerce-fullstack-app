// Google authentication
const passport = require("../strategies/main");
const db = require("../db/pool");

module.exports = (app) => {
  app.get(
    "/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );

  app.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failedLogin",
    }),
    async function (req, res) {
      try {
        await db.query(
          "INSERT INTO users (google_profile) VALUES ($1) RETURNING *",
          [req.user]
        );

        res.redirect("/");

      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error logging in" });
      }
    }
  );
};
