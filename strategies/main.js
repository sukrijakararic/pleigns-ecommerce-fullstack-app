const { getUserById } = require("../queries/user");
const passport = require("passport");
const db = require("../db/pool");
const localStrategy = require('./local');
const googleStrategy = require("./googleStrategy");

// Serialize user for session
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // Deserialize user from session
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await getUserById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  /** passport.deserializeUser(async (id, done) => {
  console.log('deserializeUser called with id:', id);
  try {
    const user = await getUserById(id);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (err) {
    done(err, null);
  }
}); **/

googleStrategy(passport);
localStrategy(passport);

module.exports = passport;
