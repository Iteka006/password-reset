const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo')


const config = require('./config/index')
const { connectToDb } = require("./config/db");
const errorHandler = require("./middlewares/error");
const responseDuration = require("./middlewares/responseDuration");

const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");


const mongoose = require("mongoose");

module.exports = connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect database.");
    }
};
const connection = require("./db");
const express = require("express");
const app = express();

connection();

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    data: "server running",
  });
});

app.use(
  session({
    secret: "my-secret",
    store:store,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 10000,
      httpOnly: true,
    },
  })
);

app.use(responseDuration);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

app.set('port', config.port)
app.set('env', config.env)

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

module.exports = app



