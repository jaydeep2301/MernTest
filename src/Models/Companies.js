const mongoose = require("mongoose");

const Companies = new mongoose.Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

const CompaniesResult = mongoose.model("CompaniesResult", Companies);
module.exports = CompaniesResult;
