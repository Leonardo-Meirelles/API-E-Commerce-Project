const { getEuropeanProductsAll, getEuropeanProductsById } = require('../services/europeanProductsService')

const getAllProductsEu = async (req, res, next) => {

    try {

        const products = await getEuropeanProductsAll()

        res.status(200).json(products)

    } catch (error) {

        res.status(400).json(error)
    }
}

const getProductByIdEu = async (req, res, next) => {

    try {

        const { id } = req.params

        const product = await getEuropeanProductsById(id)

        res.status(200).json(product)

    } catch (error) {

        res.status(400).json(error)
    }
}

module.exports = {
    getAllProductsEu,
    getProductByIdEu
}