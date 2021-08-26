const Joi = require('joi');

const login = {
  body: Joi.object()
    .keys({
      email: Joi.string().required().label('Email'),
      password: Joi.string().required().label('Password'),
    })
    .or('email')
    .unknown(true),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  login,
  logout,
};
