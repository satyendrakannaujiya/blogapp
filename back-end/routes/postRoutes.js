const express = require('express');
const router = express.Router();
const AuthHelper = require('../helpers/authHelper');

const postCtrl = require('../controllers/post');


router.get('/posts',postCtrl.getPosts);
router.get('/tags/:tag',postCtrl.getPostByTag);
router.get('/search/:search',postCtrl.searchPost);
router.get('/posts/:id',postCtrl.getPostById);
router.delete('/posts/:id',postCtrl.deletePost);
router.put('/posts/:id',postCtrl.updatePostById);

module.exports = router;