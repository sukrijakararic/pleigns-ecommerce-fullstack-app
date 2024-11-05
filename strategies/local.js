// Passport configuration for local authentication
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../queries/user");
//The strategy being created
module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await getUserByEmail(email); // returns entire user object from database (id, email, password, etc.)
          if (!user) {
            return done(null, false);
          }

          const passwordsMatch = await bcrypt.compare(password, user.password); // checks if password provided by user matches password in database
          if (!passwordsMatch) {
            return done(null, false);
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};