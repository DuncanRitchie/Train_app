const request = require("request");
const express = require("express");

const getNewsFromStationCode = (station_code, callback) => {
    let url = `https://transportapi.com/v3/uk/train/station/${station_code}/live.json?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.departures.length === 0) {
            callback("Unable to find news. Try another search.", undefined);
        } else {
            callback(undefined, {
                news: response.body.departures.all
            });
        }
    });
};

module.exports = getNewsFromStationCode