const express = require('express');

const router = express.Router();
const feedController = require('../controllers/feed');

//get /feed/posts
router.get('/posts', feedController.getPosts);

router.post('/post', feedController.addPost);
module.exports = router;