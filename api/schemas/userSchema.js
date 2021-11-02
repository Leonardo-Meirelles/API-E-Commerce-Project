const { body } = require('express-validator');
const { validateDTO } = require('../utils/handlers');

exports.userSchema = validateDTO([
    body('user.name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Must be a string'),
    body('user.email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isString()
        .withMessage('Must be a string'),
    body('data')
        .isArray()
        .withMessage('Must be an array')
]);
