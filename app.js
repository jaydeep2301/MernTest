const express = require("express");
const app = express();
const axios = require("axios");
var cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./Database/db");
const { getAllAds } = require("./src/Controllers/adsDetail");
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3000;
//connect Database
connectDB();

app.listen(PORT, async () => {
  console.log(`server started on ${PORT}`);
});
app.get("/getAds", getAllAds);
