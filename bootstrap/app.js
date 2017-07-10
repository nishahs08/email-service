const express = require('express');
const morgan = require('morgan');
const parser =require('body-parser');
const userRoute = require('./../controller/user');
const app = express();

app.use(parser.json({ }));
app.use(parser.urlencoded({ extended: false }));
// app.use('/api/user',userRoute.register)
app.post('/api/user',userRoute.register)
module.exports = app;

