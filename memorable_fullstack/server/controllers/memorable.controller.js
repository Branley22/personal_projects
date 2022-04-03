const Memorable = require("../models/memorable.model");

module.exports = {
  findAllMemorables: (req,res) => {
    Memorable.find({})
    .then((allMemorables)=> {
      res.json(allMemorables);
    })
    .catch((err)=> {
      console.log("Get all memorables failed");
      res.status(400).json(err);
    })
  },

  fineOneMemorables: (req,res)=> {
    Memorable.findOne({_id:req.params.id})
    .then((OneMemorable)=> {
      res.json(OneMemorable)
    })
    .catch((err)=> {
      res.status(400).json(err)
    })
  },

  createNewMemorable: (req,res)=> {
    Memorable.create(req,body)
    .then((newMemorable)=> {
      res.json(newMemorable)
    })
    .catch((err)=> {
      console.log("create memorable failed");
      res.status(400).json(err)
    })
  },

  updatedMemorable: (req,res)=> {
    Memorable.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new: true, runValidators: true}
    )
  }
}