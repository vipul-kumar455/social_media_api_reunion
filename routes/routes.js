const router = require('express').Router();

const { getUserProfile } = require("../controllers/user")

router.get('/api/:user_id', getUserProfile);

module.exports = router;