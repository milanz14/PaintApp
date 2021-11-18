'use strict';

const express = require('express');
const { BadRequestError, ExpressError } = require('../expressError');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const db = require('../db');
const jwt = require('jsonwebtoken');
const { ensureLoggedIn } = require('../middleware/auth');
const { route } = require('./user');
const Auth = require('../models/auth');

const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPW = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const newUser = await Auth.createUser(username, hashedPW);
    let token = jwt.sign({ username }, SECRET_KEY);
    return res.status(201).json(newUser, token);
  } catch (err) {
    return next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError('Username and password required', 400);
    }
    const user = await Auth.getUser(username);
    const success = await bcrypt.compare(password, user.password);
    if (success) {
      const token = jwt.sign({ username }, SECRET_KEY);
      return res.json({ message: 'Logged In', token });
    } else {
      return res.json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
