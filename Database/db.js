const mongoose = require("mongoose");
const db =
  "mongodb+srv://jaydeep2311:jaydeep2311@cluster0.j3itmm8.mongodb.net/AdsDetails?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected ...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB, db };
