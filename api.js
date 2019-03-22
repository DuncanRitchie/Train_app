const express = require("express");
const path = require("path");
const app = express();

const getStationCodeFromSearch = require("./server-src/getStationCode")
const getStationsFromSearch = require("./server-src/getStations")
const getTrainInfoFromStationCode = require("./server-src/getTrainInfo")
const getNewsFromStationCode = require("./server-src/getNews")

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/train", (req, res) => {
    if (!req.query.fromStation) {
        res.send("Please provide fromStation");
    } else {
        getStationCodeFromSearch(req.query.fromStation, (error, response) => {
            if (error) {
                return console.log(error);
            }// Following code sets the leavingDate.
            let leavingDate;
            let now;
            if (req.query.LeavingDate) {
              leavingDate = req.query.LeavingDate
            }
            else {
              now = new Date()
              month = now.getMonth()+1
              if (month < 10) {
                month = "0"+month;
              }
              day = now.getDate()+1
              if (day < 10) {
                day = "0"+day;
              }
              leavingDate = `${now.getFullYear()}-${month}-${day}`
            }
            // Following code sets the leavingTime.
            let leavingTime;
            if (req.query.LeavingTime) {
              leavingTime = req.query.LeavingTime
            }
            else {
              now = new Date()
              hour = now.getHours()
              if (hour < 10) {
                hour = "0"+hour;
              }
              minute = now.getMinutes()
              if (minute < 10) {
                minute = "0"+minute;
              }
              leavingTime = `${hour}:${minute}`
            }
            console.log("The date is "+leavingDate+" and the time is "+leavingTime)
            // Following code gets the train info.
            getTrainInfoFromStationCode(response.station_code, leavingDate, leavingTime, (error, response) => {
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

app.get("/station", (req, res) => {
    if (!req.query.address) {
        res.send("Please provide an address")
    } else {
        getStationsFromSearch(req.query.address, (error, response) => {
            if (error) {
                return console.log(error)
            }
            console.log(response.stations)
            res.send({ stations: response.stations })
        })
    }
})

app.get("/news", (req, res) => {
    if (!req.query.address) {
        res.send("Please provide an address");
    } else {
        getStationCodeFromSearch(req.query.address, (error, response) => {
            if (error) {
                return console.log(error);
            }
            getNewsFromStationCode(response.station_code, (error, response) => {
                if (error) {
                    return console.log(error);
                }
                console.log(response.news)
                res.send({
                    news: response.news
                });
            });
        });
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});