const axios = require('axios').default

const urlDefault = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology'

const http = axios.create({
    baseURL: urlDefault
})

module.exports = http