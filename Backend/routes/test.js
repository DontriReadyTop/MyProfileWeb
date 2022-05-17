const express = require('express')
const test_controller = require('../controllers/test_controller');
const router = express.Router()
const authen = require('../middlewares/authen');

router.use(authen);

router.get("/", test_controller.test);

module.exports = router;