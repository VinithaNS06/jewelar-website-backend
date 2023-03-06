//FILENAME : db.js
const mongoose = require("mongoose");

//Test Again
mongoose.set('strictQuery', false);
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://jewelwebsite:m8itjewel@cluster0.tfhve47.mongodb.net/M8_IT_JEWELWEB', {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
