const express = require("express");
const app = express();

const getTrainInfoFromStationCode = (station_code, date, time, callback) => {
    let url = `/uk/train/station/${station_code}/${date}/${time}/timetable.json`;
  
    request({ url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to train services!", undefined);
      } else if (response.body.departures.length === 0) {
        callback("Unable to find station. Try another search.", undefined);
      } else {
        callback(undefined, {
          allDepartures: response.body.departures.all
        });
      }
    });
  };

  module.exports = getTrainInfoFromStationCode