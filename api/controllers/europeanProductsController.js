const europeanProductsService = require('../services/europeanProductsService')

const getAllProducts = async (req, res, next) => {

    try {
   
        const products = await europeanProductsService.getEuropeanProductsAll()
        
        res.status(200).json(products)

    } catch (error) {
        
        res.status(400).json(error)
    }
}

const getProductById = async (req, res, next) => {

    try {

        const { id } = req.params
        
        const product = await europeanProductsService.getEuropeanProductsById(id)
        
        res.status(200).json(product)

    } catch (error) {

        res.status(400).json(error)
    }
}

module.exports = {
    getAllProducts,
    getProductById
}