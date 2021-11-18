'use strict';

const express = require('express');
const app = require('../app');
const { BadRequestError } = require('../expressError');
const Posts = require('../models/Posts');

const router = express.Router({ mergeParams: true });

// returns {newPost: {postDetails}}
router.post('/new', async (req, res, next) => {
  try {
    const { post_name, post_data, user_id } = req.body;
    const newPost = await Posts.create(post_name, post_data, user_id);
    return res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

// returns {post: {postDetails}}
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Posts.getPost(id);
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
