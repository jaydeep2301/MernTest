const mongoose = require("mongoose");

const Ads = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Companies",
  },
  primaryText: {
    type: String,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const AdsResult = mongoose.model("AdsResult", Ads);
module.exports = AdsResult;
