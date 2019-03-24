const request = require("request");
const express = require("express");

const getNewsFromStationCode = (station_code, callback) => {
    let url = `https://transportapi.com/v3/uk/train/station/${station_code}/live.json?app_id=fea7751f&app_key=702c5fbff7c11ddaa834da79ac4e6ddf&darwin=false&train_status=passenger`;
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