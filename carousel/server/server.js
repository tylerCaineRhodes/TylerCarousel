const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3005;
const app = express();
const cors = require('cors')
const db = require('../db/querys.js');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/wowStuff', (req, res) => {
  db.getAllData((err, data) => {
    if(err){
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/wowStuff/category', (req, res) => {
  db.getCategories(req.query.id, (err, data) => {
    if(err){
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/wowStuff/item', (req, res) => {
  db.getItem(req.query.id, (err, data) => {
    if(err){
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`you're connected to ${port}`);
})
