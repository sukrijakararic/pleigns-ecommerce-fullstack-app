const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { PORT, SESSION_SECRET } = require("./config");
const passport = require("./strategies/main");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const googleRouter = require("./routes/googleRouter");


// secuirty
app.use(cors());
app.use(helmet());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour
      httpOnly: true,
      secure: false, // set to true if you're using HTTPS
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());



//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

userRouter(app);
productsRouter(app);
cartRouter(app);
orderRouter(app);
googleRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
