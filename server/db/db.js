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
  const newCow = new Cow(cowObj);
  return newCow.save()
    .then(() => {
      return 'Cow created successfully in DB ln 25';
    })
    .catch((err) => {
      console.log('Error adding cow to DB', err);
    })
}

const deleteCow = (cowId) => {
  // let data = {"_id": cowId}
  return Cow.deleteOne({_id: cowId}).then(res => res)

    // .then(() => {
    //   return 'Cow deleted';
    // });
};
const updateCow = (cowObj) => {
  return Cow.updateOne({_id: cowId._id}, cowObj)
};
// export functions for use on server
module.exports = {
  getAllCows,
  addCow,
  deleteCow,
  updateCow
}

// const getOneCow = (id) => {
//   return Cow.findOne({'_id': id})
//     .then( (data) => {
//       return data;
//     })
//     .catch ((err) => {
//       console.log('error get A cow', err)
//     })
//   }