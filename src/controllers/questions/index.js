const { Router: router } = require('express');

const { list } = require('./list');


module.exports = (models, { config })=> {
    const api = router();
    api.get('/', list(models, { config }))    
    return api;
};