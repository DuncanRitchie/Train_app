const express = require("express");
const path = require("path");
const app = express();

const getStationCodeFromSearch = require("getStationCodeFromSearch")
const getTrainInfoFromStationCode = require("getTrainInfoFromStationCode")

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/train", (req, res) => {
  if (!req.query.address) {
    res.send("Please provide an address");
  }
  else {
    getStationCodeFromSearch(req.query.address)
    getTrainInfoFromStationCode(station_code)
        res.send({
          
        })
    }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});