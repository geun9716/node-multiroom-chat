var express = require('express');
import chat from '../controller/chat';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('chat router');
});

module.exports = router;