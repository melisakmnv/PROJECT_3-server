require('dotenv').config();
require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path')
const _DEV_MODE = false;

const app = express();

app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public/build")));

//Session //

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }), // Persist the session in the Database
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
  })
);

if (_DEV_MODE) {
  const UserModel = require("./models/user.model");

  app.use((req, res, next) => {
    User.findOne({})
      .then((userDocument) => {
        req.session.currentUser = userDocument._id;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        next();
      });
  });
}

// ROUTES //
const userRoutes = require('./routes/user.routes');
const plantRoutes = require('./routes/plant.routes');
const recipeRoutes = require('./routes/recipe.routes');
const authRoutes = require('./routes/auth.routes');
const commentRoutes = require('./routes/comment.routes');
app.use('/api/user', userRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comment', commentRoutes);

// HANDLE RESSOURCE ERRORS //

// When route is incorrect, this error will run



app.use("/api/*", (req, res, next) => {  
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
}

// HANDLE ERRORS //
app.use((error, req, res, next) => {
  console.log(error);
  error.status = error.status || 500;
  res.json(error);
});

// SERVER //

app.listen(process.env.PORT, () => {
  console.log(`Listenning on port ${process.env.PORT}`);
});

console.log("Let's goo");
