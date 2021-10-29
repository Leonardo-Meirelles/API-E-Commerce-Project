const { getBrazilianProductsAll, getBrazilianProductsById } = require('../services/brazilianProductsService');

const getAllProductsBr = async (req, res, next) => {

    try {

        const products = await getBrazilianProductsAll();

        res.status(200).json(products);

    } catch (error) {

        res.status(400).json(error);
    };
};

const getProductByIdBr = async (req, res, next) => {

    try {

        const { id } = req.params;

        const product = await getBrazilianProductsById(id);

        res.status(200).json(product);

    } catch (error) {

        res.status(400).json(error);
    };
};

module.exports = {
    getAllProductsBr,
    getProductByIdBr
};