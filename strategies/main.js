const { getUserById } = require("../queries/user");
const passport = require("passport");
const db = require("../db/pool");
const localStrategy = require("./local");
const googleStrategy = require("./googleStrategy");



// Serialize user for session
passport.serializeUser((user, done) => {
  console.log('Serialize user called with user:', user);
  done(null, user);
});

// Deserialize user from session

/**passport.deserializeUser(async (id, done) => {
  console.log('Deserialize user called with id:', id);
  try {
    const user = await getUserById(id);
    console.log('User found:', user);
    done(null, user);
  } catch (err) {
    console.log('Error deserializing user:', err);
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
