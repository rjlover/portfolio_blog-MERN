const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config({ path: './.env' });

const PORT = process.env.PORT || 5000;

//import the database connection path
require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

//import the routing path
app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log(`server is runing at port ${PORT}`)
});



