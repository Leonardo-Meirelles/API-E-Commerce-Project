const ordersRouter = require('./routing/ordersRouter')
const productsRouter = require('./routing/productsRouter')

module.exports = (api, router) => {
    
    ordersRouter(router)
    productsRouter(router)

    api.use('', router)
}
