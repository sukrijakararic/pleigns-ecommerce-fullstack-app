const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { CLIENTID, CLIENTSECRET, CALLBACKURL } = process.env;
const db = require("../db/pool");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          CLIENTID,
        clientSecret: CLIENTSECRET,
        callbackURL: 'https://pleigns-api.onrender.com/api/google/callback',
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          console.log(profile.name)
          const result = await db.query("SELECT * FROM users WHERE email = $1", [
            profile.emails[0].value,
          ]);
          if (result.rows.length > 0) {
            return done(null, result.rows[0]);
          }
    
          const insertedUser = await db.query(
            "INSERT INTO users (email, firstname, lastname, google_profile) VALUES ($1, $2, $3, $4) RETURNING *",
            [profile.emails[0].value, profile.name.givenName, profile.name.familyName, profile]
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
