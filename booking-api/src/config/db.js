const mongoose = require("mongoose");
const mongoUrl='mongodb+srv://ashokzarmariya90:W0bGoIx9rxCaedmK@cluster0.fqcnrar.mongodb.net/?retryWrites=true&w=majority'


const connect = () => {
  return mongoose.connect(mongoUrl);

};


module.exports = connect;


