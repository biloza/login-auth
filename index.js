"use strict";
const config = require('./_config/config');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 1010;
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(
    process.env.DB_KEY,
    () => console.log('Database connection successful.')
);

const login = require('./routes/login');

app.listen(port, () => console.log(`Server started on port ${port}!`));