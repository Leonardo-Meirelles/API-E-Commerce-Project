

module.exports = (router) => {

    router.route('/brazilianProducts')
        .get(brazilianProductsController.getAllProducts)
}