require('dotenv').config();
require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

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

//Session //

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }), // Persist the session in the Database
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
  })
);

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

// app.all('*', (req, res, next) => {
//   const error = new Error ('cannot find this routes'); // need to be more explicite
//   error.status = "fail";
//   error.statusCode = 404;
//   res.json({
//     message : 'cannot find this route',
//     error: error
//   })

//   next(error)
// })

app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `The ressource requesting doesn't exist. Method: ${req.method} path: ${req.originalUrl}`,
  });
});

// HANDLE ERRORS //
app.use((error, req, res, next) => {
  console.log('error from server >>>>>    ' + error);
  error.status = error.status || 500;
  res.json({
    message: 'fail',
    error: error,
  });
});

// SERVER //

app.listen(process.env.PORT, () => {
  console.log(`Listenning on port ${process.env.PORT}`);
});

console.log("Let's goo");
