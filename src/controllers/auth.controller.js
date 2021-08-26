const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, tokenService} = require('../services');

const login = catchAsync(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email) {
      const user = await authService.loginUserWithEmailAndPassword(email, password);
      if(user){
        const tokens = await tokenService.generateAuthTokens(user);
        res.send({
          data: { ...user.toJSON(), token: tokens.access.token },
          message: "Login Successfully!"
        });
      }
      else{ res.send({message: "Login Successfully!"})  }
    }
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send({ data: null, message: error.message });
  }
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  login,
  logout,
};
