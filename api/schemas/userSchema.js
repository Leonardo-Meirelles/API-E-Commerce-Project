const { body, params } = require('express-validator')
const { validateDTO } = require('../utils/handlers')

module.exports = userSchema = validateDTO([
    body("email")
        .notEmpty()
        .withMessage("O campo e-mail não pode ser vazio")
        .isEmail()
        .withMessage("O campo e-mail deve passar o tipo email"),
]);
