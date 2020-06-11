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
}
const addCow = (cowObj) => {
  // create instance of cow to save a new one
  console.log(cowObj);
  let newCow = new Cow(cowObj);
  newCow.save(function(err){
    if(err) return handleError(err)
  })
}



// export functions for use on server
module.exports = {
  getAllCows,
  addCow
}
