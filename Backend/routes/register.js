const express = require('express')
const create_user_controller = require('../controllers/create_user_controller');
const router = express.Router()

router.post("/", create_user_controller.createUser);

module.exports = router