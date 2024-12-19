const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { PORT, SESSION_SECRET } = require("./config");
const passport = require("./strategies/main");
const session = require("express-session");
const { createClient } = require("redis");
const { RedisStore } = require("connect-redis");
const cookieParser = require("cookie-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const googleRouter = require("./routes/googleRouter");
const githubRouter = require("./routes/githubRouter");

// security
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, './view/dist')));

app.use('/api', createProxyMiddleware({
  target: 'https://pleigns-api.onrender.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix when forwarding to the target
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './view/dist', 'index.html'));
});

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.connect().catch(console.error);

app.use(
  session({
   store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.set("trust proxy", 4); // Trust the first proxy


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  "/api",
  userRouter,
  productsRouter,
  cartRouter,
  orderRouter,
  googleRouter,
  githubRouter
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
