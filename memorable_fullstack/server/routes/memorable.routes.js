const MemorableController = require("../controllers/memorable.controller");

module.exports = (app)=> {
  app.get('/api/memorables', MemorableController.findAllMemorables);
  app.post('/api/memorables', MemorableController.createNewMemorable);
  app.get('/api/memorables/:id', MemorableController.fineOneMemorable);
  app.put('/api/memorables/:id', MemorableController.updatedMemorable);
  app.delete('/api/memorables/:id', MemorableController.deleteMemorable);
}