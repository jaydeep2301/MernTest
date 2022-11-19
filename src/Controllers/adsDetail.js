const Ads = require("../Models/Ads");
const data = require("../../Ads");
const data1 = require("../../Companies");
const Companies = require("../Models/Companies");

const getAllAds = async (req, res) => {
  try {
    let searchValue = req.query.searchValue;

    let aggregatedData = [
      {
        $lookup: {
          from: "companiesresults",
          localField: "companyId",
          foreignField: "_id",
          as: "companies",
        },
      },
      {
        $match: {
          $or: [
            { primaryText: { $regex: searchValue, $options: "ig" } },
            { headline: { $regex: searchValue, $options: "ig" } },
            { description: { $regex: searchValue, $options: "ig" } },
            { "companies.name": { $regex: searchValue, $options: "ig" } },
          ],
        },
      },
    ];
    let data = await Ads.aggregate(aggregatedData);

    return res.status(200).send({
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      error: error,
    });
  }
};
module.exports = {
  getAllAds,
};
