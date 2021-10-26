const brazilianProductsService = require('../services/brazilianProductsService')

const getAllProducts = async (req, res, next) => {

    try {

        const products = await brazilianProductsService.getBrazilianProductsAll()
        
        res.status(200).json(products)
        
    } catch (error) {

        res.status(400).json(error)
    }
}

const getProductById = async (req, res, next) => {

    try {

        const { id } = req.params
        
        const product = await brazilianProductsService.getBrazilianProductsById(id)
        
        res.status(200).json(product)

    } catch (error) {

        res.status(400).json(error)
    }
}

module.exports = {
    getAllProducts,
    getProductById
}