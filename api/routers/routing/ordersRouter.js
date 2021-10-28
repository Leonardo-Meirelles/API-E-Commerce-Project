const { getAllOrders } = require('../../controllers/ordersController')

module.exports = (router) => {

    router.route('/orders')
        .get(getAllOrders)

    // router.route('/orders')
    //     .post(ordersController.postOneOrder)
}
