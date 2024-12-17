const { GITCLIENT_ID, GITCLIENT_SECRET } = process.env;
const GitHubStrategy = require("passport-github2").Strategy;
const db = require("../db/pool");

module.exports = function (passport) {
    passport.use(
        new GitHubStrategy(
          {
            clientID: GITCLIENT_ID,
            clientSecret: GITCLIENT_SECRET,
            callbackURL: "https://pleigns-api.onrender.com/api/github/callback",
          },
          async function (accessToken, refreshToken, profile, done) {
                  try {
                    console.log(profile.displayName);
                    const result = await db.query("SELECT * FROM users WHERE firstname = $1", [
                      profile.displayName,
                    ]);
                    if (result.rows.length > 0) {
                      return done(null, result.rows[0]);
                    }
              
                    const insertedUser = await db.query(
                      "INSERT INTO users (firstname, google_profile) VALUES ($1, $2) RETURNING *",
                      [profile.displayName, profile]
                    );
              
                    const userId = insertedUser.rows[0].id;
                    const created = new Date();
                    const modified = new Date();
              
                    // Create a new cart for the user
                    await db.query(
                      "INSERT INTO carts (userid, created, modified) VALUES ($1, $2, $3)",
                      [userId, created, modified]
                    );
              
                    return done(null, insertedUser.rows[0]);
                  } catch (err) {
                    console.log(err);
                    return done(err);
                  }
                }
              )
            );
};