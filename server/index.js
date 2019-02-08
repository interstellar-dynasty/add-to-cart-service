const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('../database/index.jsx');
const mongoose = require('mongoose')
const path = require('path');


app.use(bodyparser.json());
app.use(express.static(__dirname + "/../dist"));


app.listen(3000, () => {
    console.log("Server has started and is listening at port 3000");
  });