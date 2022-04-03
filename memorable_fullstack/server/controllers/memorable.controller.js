const Memorable = require("../models/memorable.model");

module.exports = {
  findAllMemorables: (req,res) => {
    Memorable.find({})
    .then((allMemorables) => {
      res.json(allMemorables);
    })
  }
}