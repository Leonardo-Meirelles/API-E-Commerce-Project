const { postOrders } = require('../../controllers/ordersController');
const { userSchema } = require('../../schemas/userSchema');

module.exports = (router) => {

    router.route('/orders')
        .post(postOrders);
};
