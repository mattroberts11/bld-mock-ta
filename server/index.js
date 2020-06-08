const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const db = require('./db/db');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use(bodyParser.json());

// get cows
app.get('/api/cows', (req, res) => {
  db.getAllCows()
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
      res.status(500).send("Can't get cows, they all ran away!");
    })
});
// post cow
app.post('/api/cows', (req, res) => {
  // console.log('req.body index.ln21= ', req.body);
  db.createCow(req.body)
    .then(cows => {
      console.log("post test cows ", cows);
      res.status(201).send('New cow created...Moo!')
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Dang! no cow added to database');
    })
})
app.listen(port, () => console.log(`Cow Server is running on port ${port} ... Moo!`));