const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    email: Joi.string().label('Email'),
    password: Joi.string().required().label('Password'),
    name: Joi.string().required().label('Name'),
  }),
};

module.exports = {
  register
};
