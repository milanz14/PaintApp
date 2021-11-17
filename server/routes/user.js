'use strict';

const express = require('express');
const { BadRequestError } = require('../expressError');
const User = require('../models/user');

const router = express.Router({ mergeParams: true });

// returns { user: {userInfo}, posts: [list_of_posts_data] }
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(`UserID = ${id}`);
  const userInfo = await User.getUserAndPosts(id);

  let postsArr = [];
  for (let post of userInfo.posts) postsArr.push(post.post_data);

  userInfo['posts'] = postsArr;
  return res.status(201).json(userInfo);
});

module.exports = router;
