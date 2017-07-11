"use strict"

const router = require('./../routers');
const bodyParser = require('body-parser');
module.exports = {
    configureExpress(app){
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
    app.use('/api/v1', router); 
    }
}