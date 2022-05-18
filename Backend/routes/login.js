const express = require('express')
const login_controller = require('../controllers/login_controller');
const router = express.Router()

router.post("/", login_controller.login);
router.get("/authen", login_controller.authen)

module.exports = router