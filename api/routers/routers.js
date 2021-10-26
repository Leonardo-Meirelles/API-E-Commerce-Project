const ordersRouter = require('./routing/ordersRouter')
const brazilianProductsRouter = require('./routing/brazilianProductsRouter')
const europeanProductsRouter = require('./routing/europeanProductsRouter')

module.exports = (api, router) => {
    
    ordersRouter(router)
    brazilianProductsRouter(router)
    europeanProductsRouter(router)

    api.use('', router)
}
