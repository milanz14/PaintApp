'use strict';

const express = require('express');
const app = require('../app');
const { BadRequestError } = require('../expressError');
const Posts = require('../models/Posts');

const router = express.Router({ mergeParams: true });

// returns {newPost: {postDetails}}
router.post('/new', async (req, res, next) => {
  const { post_name, post_data, user_id } = req.body;
  const newPost = await Posts.create(post_name, post_data, user_id);
  return res.status(201).json(newPost);
});

// returns {post: {postDetails}}
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const post = await Posts.getPost(id);
  return res.status(201).json(post);
});

module.exports = router;
