const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const {toJSON} = require('./plugins');

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid email');
                }
            },
        },
        password: {
            type: String,
            trim: true,
            required: false,
            minlength: 6,
            private: true, // used by the toJSON plugin
        },
        name: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
UserSchema.plugin(toJSON);

UserSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};

UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.email) {
        user.email = user.email.toLowerCase();
    }
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 6);
    }
    next();
});


const User = mongoose.model('USERS', UserSchema);

module.exports = User;
