const mongoose = require("mongoose");
const dbName = "Memorables";

mongoose.connect("mongodb://localhost/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then (()=> {
  console.log(`You connected to the ${dbName} database`);
})
.catch((err)=> {
  console.log(`error connecting to the ${dbName} name`);
  console.log(err);
})