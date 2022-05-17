const express = require('express')
const profile_controller = require('../controllers/profile_controller');
const router = express.Router()

const authen = require('../middlewares/authen');
router.use(authen);

router.post("/insert", profile_controller.insertProfile);
router.get("/get", profile_controller.getProfile);

module.exports = router