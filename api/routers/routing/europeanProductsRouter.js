const europeanProductsController = require('../../controllers/europeanProductsController')

module.exports = (router) => {

    router.route('/europeanProducts')
        .get(europeanProductsController.getAllProducts)

    router.route('/europeanProducts/:id')
        .get(europeanProductsController.getProductById)
}