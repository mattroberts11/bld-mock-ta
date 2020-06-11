const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/two-cows', {useNewUrlParser: true,  useUnifiedTopology: true});

var CowSchema = new Schema({
  name: String;
  description: String;
});

module.exports = mongoose.model('Cow', CowSchema)
