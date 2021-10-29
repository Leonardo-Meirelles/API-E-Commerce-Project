const { getEuropeanProductsAll } = require('../services/europeanProductsService');
const { getBrazilianProductsAll } = require('../services/brazilianProductsService');

const getAllProductsNames = async (req, res, next) => {

    try {

        const euroProducts = await getEuropeanProductsAll();

        const brProducts = await getBrazilianProductsAll();

        const namesEu = euroProducts.map((product) => {
            return {label: product.name, vendor: 'european', id: product.id}
        });

        const namesBr = brProducts.map((product) => {
            return {label: product.nome, vendor: 'brazilian', id: product.id}
        });

        res.status(200).json({ namesEu, namesBr })

    } catch (error) {

        res.status(400).json(error)
    };
};

module.exports = {
    getAllProductsNames
};