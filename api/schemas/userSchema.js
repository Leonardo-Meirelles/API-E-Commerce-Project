const { body } = require('express-validator');
const { validateDTO } = require('../utils/handlers');

exports.userSchema = validateDTO([
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Name must be a string'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email must be in email format'),
]);
