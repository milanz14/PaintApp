'use strict';

const express = require('express');
const { BadRequestError } = require('../expressError');
const User = require('../models/user');
const { loggedInAndUser } = require('../middleware/auth');
const router = express.Router({ mergeParams: true });

// returns { user: {userInfo}, posts: [list_of_posts_data] }
router.get('/account/:username', loggedInAndUser, async (req, res, next) => {
  try {
    const { username } = req.params;

    console.log(`Username = ${username}`);
    const userInfo = await User.getUserAndPosts(username);

    let postsArr = [];
    for (let post of userInfo.posts) postsArr.push(post.post_data);

    userInfo['posts'] = postsArr;
    return res.status(201).json(userInfo);
  } catch (err) {
    next(err);
  }
});

router.get('/:username', async (req, res, next) => {
  try {
    const { username } = req.params;
    const userPosts = await User.getUserPosts(username);
    const postsArr = [];
    for (let post of userPosts.posts) postsArr.push(post.post_data);
    return res.status(201).json({ userPosts: postsArr });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
