const express = require('express');
const router = express.Router();

const createCtrl = require('../controllers/contact');

router.post('/contact',createCtrl.createContact);



module.exports = router;