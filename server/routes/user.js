'use strict';

const express = require('express');
const { BadRequestError } = require('../expressError');
const User = require('../models/user');

const router = express.Router({ mergeParams: true });

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(`UserID = ${id}`);
  const userInfo = await User.getUserAndPosts(id);
  return res.status(201).json(userInfo);
});

module.exports = router;
