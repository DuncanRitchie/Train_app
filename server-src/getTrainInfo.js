const request = require("request");
// const async = require("async")

const getTrainInfoFromStationCode = (fromStationCode, toStationCode, date, time, callback) => {
    let url = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=06fa4af4&app_key=131158f245f478626a1f8c44a1927eec`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.departures.all.length === 0) {
            callback("Unable to find train info. Try another search.", undefined);
        } else if (!toStationCode) {
            callback(undefined, { allDepartures: response.body.departures.all });
        } else {
            let wantedDepartures = [];
            // async.filter(response.body.departures.all, doesDepartureGoToToStation(departure, toStationCode, callback), function(err, results) {
            // });
            // async.forEachOf(response.body.departures.all, function(departure, i, callback) {
            //     console.log(`Testing service ${departure.service}`)
            //     let serviceUrl = `https://transportapi.com/v3/uk/train/service/${departure.service}///timetable.json?app_id=06fa4af4&app_key=131158f245f478626a1f8c44a1927eec&darwin=false&live=false`;
            //     request({ serviceUrl, json: true }, (error, res) => {
            //         if (error) {
            //             console.log(error)
            //             callback("Unable to get information on stations calling at. Try another search.", undefined)
            //         } else {
            //             async.forEachOf(res.body.stops, function(stop, j, callback) {
            //                 console.log(`Testing station ${j} - ${stop.station_name}`)
            //                 if (stop.station_code == toStationCode) {
            //                     console.log("This is the toStation!")
            //                     wantedDepartures.push(response.body.departures.all[i])
            //                 }
            //             });
            //         }
            //     })
            // }, function(err) {
            //     if (err) console.error(err.message);
            // if (wantedDepartures == []) {
            //     callback(`No services found going from ${fromStationCode} to ${toStationCode}`, undefined)
            // } else {
            console.log(wantedDepartures)
            callback(undefined, { allDepartures: wantedDepartures })
                //      };
        }
    })
}

const doesDepartureGoToToStation = (departure, toStationCode, callback) => {

}

module.exports = getTrainInfoFromStationCode