const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController');

router.get('/users', UserController.findAll);

module.exports = router;