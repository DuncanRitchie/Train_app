const request = require("request")
const express = require("express");

const getStationCodeFromSearch = (query, callback) => {
    let url = `http://transportapi.com/v3/uk/places.json?query=${query}&type=train_station&app_id=06fa4af4&app_key=131158f245f478626a1f8c44a1927eec`;
    request({url, json: true}, (error, response)=>{
      if (error) {
        callback("Unable to connect to train services!", undefined);
      } else if (response.body.member.length === 0) {
        callback("Unable to find station code. Try another search.", undefined);
      } else {
        callback(undefined, {
          station_code: response.body.member[0].station_code
        });
      }
    })
  }

  module.exports = getStationCodeFromSearch