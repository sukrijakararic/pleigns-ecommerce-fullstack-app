const express = require("express");
const userRouter = express.Router();
const {
  registerUserAndCreateCart,
  changePAssword,
  deleteUserById,
  getUserByIdForRouter,
  showUser,
} = require("../queries/user");
const passport = require("../strategies/main");

userRouter.get("/users/failedLogIn", (req, res) => {
  res.json({ message: "Incorrect email or password" });
});

userRouter.get("/users/loggedIn", showUser);

userRouter.get("/users/getLocalUser", (request, response) => {
  if (request.user) {
    response.json(request.user);
  } else {
    response.status(401).json({ message: "You are not logged in" });
  }
});

userRouter.get("/users/:id", getUserByIdForRouter);

userRouter.post("/users/register", registerUserAndCreateCart);

userRouter.post(
  "/users/login",
  passport.authenticate("local", { failureRedirect: "/api/users/failedLogIn" }),
  (req, res) => {
    res.json({ message: "Logged in" });
  }
);

userRouter.put("/users/changePassword", changePAssword);

userRouter.delete("/users/:id", deleteUserById);

userRouter.post("/users/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err); // log the error
      res.status(500).send("Error logging out"); // return an error response
    } else {
      res.status(200).json({ message: "Logged out" });
    }
  });
});

module.exports = userRouter;
