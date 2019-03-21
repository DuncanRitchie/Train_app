const express = require("express");
const path = require("path");
const app = express();

const getStationCodeFromSearch = require("./getStationCode")
const getTrainInfoFromStationCode = require("./getTrainInfo")

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/train", (req, res) => {
  if (!req.query.address) {
    res.send("Please provide an address");
  }
  else  {
      getStationCodeFromSearch(req.query.address, (error, response) => {
        if (error) {
          return console.log(error);
        }
        getTrainInfoFromStationCode(response.station_code, (error, response) => {
          if (error) {
              return console.log(error);
          }
          console.log(response.allDepartures)
          res.send({
            allDepartures: response.allDepartures
            
          });
        });
      });
    }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
