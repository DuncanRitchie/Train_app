const request = require("request")
const express = require("express");


const getTicketFares = (station_code_from, station_code_to, callback) => {
    
    let url = `http://api.brfares.com/querysimple?orig=${station_code_from}&dest=${station_code_to}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.fares[0].adult.length === 0) {
            callback("Unable to find station. Try another search.", undefined);
        } else {
            callback(undefined, {
                fares: response.body.fares[0].adult.fare
            });
        }
    })
}

module.exports = getTicketFares