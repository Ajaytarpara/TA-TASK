const express = require('express');
const auth = require('../../middlewares/auth');
const { infoController } = require('../../controllers');

const router = express.Router();

router.post('/news',auth(), infoController.getNews);
router.post('/weather', infoController.getWeather);

module.exports = router;

