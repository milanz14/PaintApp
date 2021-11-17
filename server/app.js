/*
“/auth/register” and “/auth/login”\
"/user/:id” route to see details for a user and all of their posts
“/home” --> GET route to show the most recent 20 posts by all users
“/posts/:id” route for specific post details
“/posts/new” to add a new post
*/

const express = require('express');
const cors = require('cors');

const { NotFoundError, BadRequestError } = require('./expressError');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');
const Home = require('./models/home');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/posts', postRoutes);

app.get('/:num', async (req, res) => {
  const num = parseInt(req.params.num);
  console.log(typeof num);
  if (typeof num !== 'number') {
    throw new BadRequestError('invalid number input');
  }

  const mostRecentPosts = await Home.getMostRecent(num);
  return res.status(201).json(mostRecentPosts);
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
