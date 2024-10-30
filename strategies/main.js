const { getUserById } = require("../queries/user");
const passport = require("passport");
const db = require("../db/pool");
const localStrategy = require("./local");
const googleStrategy = require("./googleStrategy");

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session

/** passport.deserializeUser(async (id, done) => {
    try {
      const user = await getUserById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }); **/

/** passport.deserializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err, null);
  }
}); **/

passport.deserializeUser(function (user, done) {
  done(null, user);
});

googleStrategy(passport);
localStrategy(passport);

module.exports = passport;
