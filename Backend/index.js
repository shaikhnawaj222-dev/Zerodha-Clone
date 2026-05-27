require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");


app.use(cors());
app.use(bodyParser.json());





app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");
});