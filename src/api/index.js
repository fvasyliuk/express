const express = require('express');
const { errorHandler } = require('../midlleware/error-handller');

//init models
const { Question } = require('../models/question');
//init controllers
const questions = require('../controllers/questions');
const delivery = require('../controllers/delivery');

const models = { Question };

const initRouters = config => {
    const app = express();

    app.use('/questions/', questions(models, { config }));
    //app.use('/users/', users);
    app.use('/delivery/', delivery(models, { config }));

    app.use(errorHandler);
    return app;
}

module.exports = initRouters;