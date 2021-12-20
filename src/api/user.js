const express = require('express');
const userController = require('../controllers/User');

const router = express.Router();

router.get('/', userController.GetUsers);

router.post('/', userController.AddUser);

module.exports = router;