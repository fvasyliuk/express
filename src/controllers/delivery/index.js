const { Router: router } = require('express');

const { delivery } = require('./delivery');


module.exports = (models, { config })=> {
    const api = router();    
    api.post('/', delivery(models, { config }))
    return api;
};