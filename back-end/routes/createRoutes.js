const express = require('express');
const router = express.Router();

const createCtrl = require('../controllers/create');

router.post('/create',createCtrl.createBlog);
router.get('/create/topics',createCtrl.getTopics);



module.exports = router;