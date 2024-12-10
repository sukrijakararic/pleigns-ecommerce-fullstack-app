const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { PORT, SESSION_SECRET } = require("./config");
const passport = require("./strategies/main");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redis = require("redis");

const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const googleRouter = require("./routes/googleRouter");

// secuirty
app.use(cors());
app.use(helmet());


const redisClient = redis.createClient({
  url: process.env.REDIS_URL, // Your Redis connection URL
  legacyMode: true, // Add this if you're using older versions of `connect-redis`
});

redisClient.connect().catch(console.error);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour
      httpOnly: true,
      secure: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/api",
  userRouter,
  productsRouter,
  cartRouter,
  orderRouter,
  googleRouter
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
