const { getAllProductsNames } = require('../../controllers/allProducts');
const { getAllProductsBr, getProductByIdBr } = require('../../controllers/brazilianProductsController');
const { getAllProductsEu, getProductByIdEu } = require('../../controllers/europeanProductsController');

module.exports = (router) => {
    
    router.route('/products/names')
        .get(getAllProductsNames);

    router.route('/products/brazilian')
        .get(getAllProductsBr);

    router.route('/products/brazilian/:id')
        .get(getProductByIdBr);
        
    router.route('/products/european')
        .get(getAllProductsEu);

    router.route('/products/european/:id')
        .get(getProductByIdEu);
};