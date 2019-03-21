const request = require("request");
const express = require("express");

const getTrainInfoFromStationCode = (station_code, date, time, callback) => {
    let url = `http://transportapi.com/v3/uk/train/station/${station_code}/${date}/${time}/timetable.json?app_id=06fa4af4&app_key=131158f245f478626a1f8c44a1927eec`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.departures.all.length === 0) {
            callback("Unable to find station. Try another search.", undefined);
        } else {
            callback(undefined, {
                allDepartures: response.body.departures.all
            });
        }
    });
};

module.exports = getTrainInfoFromStationCode