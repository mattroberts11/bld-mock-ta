const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// connect to db
mongoose.connect('mongodb://localhost/two-cows', {useNewUrlParser: true,  useUnifiedTopology: true});

const CowSchema = new Schema({
  name: String,
  description: String
});
//Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.
const Cow = mongoose.model('Cow', CowSchema);

const getAllCows = () => {
  return Cow.find()
    .then((cows) => {
      return cows;
    })
    .catch((err) => {
      console.log('Error getting cows', err);
    })
}
const addCow = (cowObj) => {
  // create instance of cow to save a new one
  // console.log('DB cowObj log=',cowObj);
  const newCow = new Cow(cowObj);
  return newCow.save()
    .then(() => {
      return 'Cow created successfully in DB ln 25';
    })
    .catch((err) => {
      console.log('Error adding cow to DB', err);
    })
}



// export functions for use on server
module.exports = {
  getAllCows,
  addCow
}
