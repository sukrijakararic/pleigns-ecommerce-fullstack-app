const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "1014782130761-mhc5gdap8j47i852kfbkufrvhu6m4af5.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: `http://localhost:${process.env.PORT}/google/callback`,
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
    )
  );
};
