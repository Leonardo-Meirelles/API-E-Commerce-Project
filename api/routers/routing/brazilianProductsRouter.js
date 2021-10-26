const brazilianProductsController = require('../../controllers/brazilianProductsController')

module.exports = (router) => {

    router.route('/brazilianProducts')
        .get(brazilianProductsController.getAllProducts)

    router.route('/brazilianProducts/:id')
        .get(brazilianProductsController.getProductById)
}