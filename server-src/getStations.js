const request = require("request")
const express = require("express");

const getStationsFromSearch = (query, callback) => {
    let url = `http://transportapi.com/v3/uk/places.json?query=${query}&type=train_station&app_id=fea7751f&app_key=702c5fbff7c11ddaa834da79ac4e6ddf`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.member.length === 0) {
            callback("Unable to find station. Try another search.", undefined);
        } else {
            callback(undefined, {
                stations: response.body.member
            });
        }
    })
}

module.exports = getStationsFromSearch