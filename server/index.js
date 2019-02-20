const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');
// const Cart = require('../database/index.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./dist'));

app.get('/api/getAll', (req, res) => {
  db.getAllProducts((err, data) => {
    if(err) {
      console.log(err, 'error on get api')
      res.end()
    }
      res.json(data)
      console.log('get request successful!')
    })
  })

  app.listen(port, () => console.log(`Server is listening on port ${port}!`))