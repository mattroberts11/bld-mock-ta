// web server setup
const express = require('express');
const route = require('express').Router();
const app = express();
const cors = require('cors');
const port = 8080;
const bp = require('body-parser');
// const mongoose = require('mongoose');
// import Cow model
const db = require('./db/db');

// add cors
app.use(cors());
// use body parser
app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

app.get('/api/cows', function(req, res){
  // res.send('Get path works');
  db.getAllCows()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send('Error - Cannot get cows');
    })
})

route.get('api/cows/:id', function(req,res) {
  res.send('Get cows id works')
  console.log('Req params= ', req.params.id);
  // db.getOneCow(req.params.id)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send('Error - cannot get ONE cow');
  //   })
})

app.post('/api/cows', (req, res) => {
  let newCow = {
    name: req.body.name,
    description: req.body.description
  }
  // console.log(req.body)
  db.addCow(newCow)
    .then( (data) => {
      res.status(201).send(data);
    })
    .catch( (err) => {
      res.status(500).send('Error posting data index.js ln39')
    })
})

app.delete('/api/cows', (req, res) => {
  // console.log(req.body.id);
  let delCow = {"_id": req.body.id};
  db.deleteCow(delCow)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send('Something went wrong with delete operation')
    })
})

app.listen(port, () => console.log(`Cow Server is running on port ${port}`));