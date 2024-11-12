const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { CLIENTID, CLIENTSECRET, CALLBACKDOMAIN, PORT } = process.env;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          CLIENTID,
        clientSecret: CLIENTSECRET,
        callbackURL: `${CALLBACKDOMAIN}${PORT}/api/google/callback`,
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile._json);
      }
    )
  );
};
