
const { User} = require('../models');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
    return User.create(userBody);
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
  };

module.exports = {
    createUser,
    getUserByEmail,
};
