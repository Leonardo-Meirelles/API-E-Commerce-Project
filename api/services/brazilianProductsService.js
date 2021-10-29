const http = require('../config/http');

const getBrazilianProductsAll = async () => {

    const response = await http.get('/brazilian_provider');
    
    const products = response.data;

    return products
};

const getBrazilianProductsById = async (id) => {

    const response = await http.get(`/brazilian_provider/${id}`);
    
    const product = response.data;

    return product
};

module.exports = {
    getBrazilianProductsAll,
    getBrazilianProductsById
};