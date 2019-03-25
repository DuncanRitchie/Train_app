const express = require("express");
const path = require("path");
const cors = require("cors")
const dotenv = require("dotenv")

const app = express();

const getStationCodeFromSearch = require("./server-src/getStationCode")
const getStationsFromSearch = require("./server-src/getStations")
const getTrainInfoFromStationCode = require("./server-src/getTrainInfo")
const getTicketFares = require("./server-src/getTicketFares")
const getNewsFromStationCode = require("./server-src/getNews")

const port = process.env.PORT || 3001;

const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));
app.use(cors())
dotenv.config()

app.get("/train", (req, res) => {

        // if (!req.query.fromStation) {
        //     res.send("Please provide fromStation");
        // } else {
    // getStationCodeFromSearch(req.query.fromStation, (error, response) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //         fromStationCode = response.station_code;
    //     })
        //         getStationCodeFromSearch(req.query.toStation, (error, response) => {
        //             if (error) {
        //                 return console.log(error)
        //             }
        //             toStationCode = response.station_code;
   // Following code sets the leavingDate.
    let leavingDate;
    let now;
    if (req.query.leavingDate) {
        leavingDate = req.query.leavingDate
    } else {
        now = new Date()
        month = now.getMonth() + 1
        if (month < 10) {
            month = "0" + month;
        }
        day = now.getDate() + 1
        if (day < 10) {
            day = "0" + day;
        }
        leavingDate = `${now.getFullYear()}-${month}-${day}`
    }
    // Following code sets the leavingTime.
    let leavingTime;
    if (req.query.leavingTime) {
        leavingTime = req.query.leavingTime
    } else {
        now = new Date()
        hour = now.getHours()
        if (hour < 10) {
            hour = "0" + hour;
        }
        minute = now.getMinutes()
        if (minute < 10) {
            minute = "0" + minute;
        }
        leavingTime = `${hour}:${minute}`
    } 
    console.log("The date is " + leavingDate + " and the time is " + leavingTime)
        
    // Following code gets the train info.
    getTrainInfoFromStationCode(req.query.chosenFromStation, req.query.chosenToStation, leavingDate, leavingTime, (error, outboundResult) => {
        
        if (error) {
            return console.log(error);
        }
        // console.log(response.allDepartures)
        // allDepartures = response.allDepartures
        // console.log(outboundResult)
        getTicketFares(req.query.chosenFromStation, req.query.chosenToStation, (error, response) => {
            // console.log(response.fares)
            res.send({
                allDepartures: outboundResult,
                fares: response.fares
            });
        })

    });
    // })
    // });
    //  }
})

//This is a route which gets the list of stations searched by user, to be fetched in front-end.
app.get('/getStationList', (req, res) => {
    if (!req.query.placeName) {
        console.log('error')
        res.send('Please provide a station name')

    } else {
        getStationCodeFromSearch(req.query.placeName, (error, response) => {
            if(error) {
                return console.log(error)
            }
            res.send({
                stations: response.stations
            }) 
            
        })
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