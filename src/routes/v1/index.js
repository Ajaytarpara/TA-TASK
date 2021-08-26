const express = require('express');

const authRoute = require('./auth.route');
const infoRoute = require('./info.route');
const userRoute = require('./user.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/info', infoRoute);
router.use('/user', userRoute);


module.exports = router;
