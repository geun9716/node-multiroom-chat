var express = require('express');
var router = express.Router();

// const users = require('./users.js');
const posts = require('./posts.js');
const chat = require('./chat.js');

// router.use('/user', users);
router.use('/post', posts);
router.use('/chat', chat);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
