const { getUserById } = require("../queries/user");
const passport = require("passport");
const localStrategy = require("./local");
const googleStrategy = require("./googleStrategy");
const githubStrategy = require("./githubStrategy");



// Serialize user for session
passport.serializeUser((user, done) => {
  console.log('Serialize user called with user:', user);
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser(function (user, done) {
  console.log('Deserialize user called with user:', user);
  done(null, user);
});

googleStrategy(passport);
localStrategy(passport);
githubStrategy(passport);



module.exports = passport;
