"use strict";
const config = require('./_config/config');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 1010;

dotenv.config();

app.listen(port, () => console.log(`Server started on port ${port}!`));