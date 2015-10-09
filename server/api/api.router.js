'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/signup', require('./signup/signup.router'));

router.use('/login', require('./login/login.router'));

module.exports = router;