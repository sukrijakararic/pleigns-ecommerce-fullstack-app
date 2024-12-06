const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { CLIENTID, CLIENTSECRET } = process.env;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          CLIENTID,
        clientSecret: CLIENTSECRET,
        callbackURL: 'http://localhost:4000/api/google/callback',
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile._json);
      }
    )
  );
};
