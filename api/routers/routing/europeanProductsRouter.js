

module.exports = (router) => {

    router.route('/europeanProducts')
        .get(europeanProductsController.getAllProducts)
}