const express = require('express');
const validate = require('../../middlewares/validate');
const { userValidation } = require('../../validations');
const { userController } = require('../../controllers');

const router = express.Router();

router.post('/register', validate(userValidation.register), userController.createUser);

module.exports = router;
