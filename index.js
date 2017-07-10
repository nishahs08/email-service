const app = require('./bootstrap/app')


"use strict";
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users',function(){
    console.log("connected db");
});

 mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' );
    });

      mongoose.connection.once('open', () => {
        console.log('Connected to mongodb!');
    });

    mongoose.connection.on('error', function(err) {
        console.error('Mongoose default connection error: ' + err);
    });
    
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });



app.listen(3000, function(){
    console.log('Node api running on port 3000' );
});
    
