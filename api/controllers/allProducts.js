const { getEuropeanProductsAll } = require('../services/europeanProductsService');
const { getBrazilianProductsAll } = require('../services/brazilianProductsService');

const getAllProductsNames = async (req, res, next) => {

    try {

        const euroProducts = await getEuropeanProductsAll();

        const brProducts = await getBrazilianProductsAll();

        const namesEu = euroProducts.map((product) => {
            return product.name
        });

        const namesBr = brProducts.map((product) => {
            return product.nome
        });

        res.status(200).json({ namesEu, namesBr })

    } catch (error) {

        res.status(400).json(error)
    };
};

module.exports = {
    getAllProductsNames
};