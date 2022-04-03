const mongoose = require('mongoose');

const MemorableSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
    minlength: [5, "A title must be atleast five characters long."]
  },
  image: {
    type: String,
    required: [true, "Must add an image"]
  },
  message: {
    type: String,
    required: [true, "A message is required"]
  },
  tags: {
    type: String
  }
}, {timeStamps: true})

const Memorable = mongoose.model("Memorable", MemorableSchema);
module.exports = Memorable;