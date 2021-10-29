const http = require('../config/http');

const getEuropeanProductsAll = async () => {

    const response = await http.get('/european_provider');
    
    const products = response.data;

    return products
};

const getEuropeanProductsById = async (id) => {

    const response = await http.get(`/european_provider/${id}`);
    
    const product = response.data

    return product
};

module.exports = {
    getEuropeanProductsAll,
    getEuropeanProductsById
};