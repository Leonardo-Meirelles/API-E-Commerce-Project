

module.exports = (router) => {

    router.route('/orders')
        .get(ordersController.getAllOrders)

    router.route('/orders')
        .post(ordersController.postOneOrder)
}
