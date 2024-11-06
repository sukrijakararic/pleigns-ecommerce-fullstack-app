const express = require("express");
const userRouter = express.Router();
const {
  registerUserAndCreateCart,
  showUsers,
  changePAssword,
  deleteUserById,
  getUserByIdForRouter,
} = require("../queries/user");
const passport = require("../strategies/main");

module.exports = (app) => {
  app.get("/failedLogIn", (req, res) => {
    res.json({ message: "Incorrect email or password" });
  });
  app.use("/users", userRouter);

  userRouter.get("/", showUsers);

  userRouter.get("/:id", getUserByIdForRouter);

  userRouter.post("/register", registerUserAndCreateCart);

  userRouter.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/failedLogIn"}),
    (req, res) => {
      // console.log("req.session.passport:", req.session.passport);
      // console.log("req.user:", req.user);
      res.json({ message: "Logged in", user: req.user });
    }
  );

  userRouter.put("/changePassword", changePAssword);

  userRouter.delete("/:id", deleteUserById);

  userRouter.post("/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error(err); // log the error
        res.status(500).send("Error logging out"); // return an error response
      } else {
        res.status(200).json({ message: "Logged out" });
      }
    });
  });
};
