const express = require('express');
const router = express.Router();
const { createItem, getAllItems } = require('../controllers/itemController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, createItem);
router.get('/', getAllItems);

module.exports = router;
