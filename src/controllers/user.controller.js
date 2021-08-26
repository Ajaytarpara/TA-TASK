const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const { User } = require('../models');

const createUser = catchAsync(async (req, res) => {
  const count = await User.countDocuments({ email: req.body.email });
  if (count === 0) {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ data: user, message: "Register Successfully!!!" });
  } else {
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send({ message: "Email already exist" });
  }
});


module.exports = {
    createUser
};
