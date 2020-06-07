const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/cows', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cowSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Cow = mongoose.model('cow', cowSchema);

// get all cow data
const getAllCows = () => {
  return Cow.find()
    .then(data => {
      return data;
    })
    .catch(err => err)
};

// create new cow data
const createCow = cowObj => {
  const newCow = new Cow(cowObj);
  // console.log("Post test db.ln26 data= ", cowObj)
  return newCow
    .save()
    .then(() => {
      return ('Cow created successfully');
    })
    .catch(err => err);
};

module.exports = {
  getAllCows,
  createCow
};