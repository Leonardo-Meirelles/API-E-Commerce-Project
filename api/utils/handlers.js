const { validationResult } = require("express-validator");

exports.validateDTO = (checks) => {

    return [
        ...checks,
        (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
        
                throw errors

            } else {

                next();
            }
        },
    ]
};