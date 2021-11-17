// “/auth/register” and “/auth/login”

// “/user/profile” page
// "/user/:id” route to see details for a user and all of their posts

// I'd say we put this inside the user's profile
// “/home” --> GET route to show the most recent 20 posts by all users

// “/post/:id” route for specific post details

// “/post/new” to add a new post

const express = require('express');
const cors = require('cors');

const { NotFoundError } = require('./expressError');
const user = require('./routes/user');
const post = require('./routes/post');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(function (req, res, next) {
  console.log('***********************************');
  return next(new NotFoundError());
});

// Generic error handler
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
