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
        const result = await db.query(
          "SELECT * FROM users WHERE google_profile ->> 'sub' = $1",
          [req.user.sub]
        );
        if (result.rows.length > 0) {
          return res.status(200).redirect("http://localhost:5173/profile");
        }

        await db.query(
          "INSERT INTO users (google_profile) VALUES ($1) RETURNING *",
          [req.user]
        );

        res.status(200).redirect("http://localhost:5173/profile");

      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error logging in" });
      }
    }
  );
};
