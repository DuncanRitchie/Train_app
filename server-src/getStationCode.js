const request = require("request");

const getStationCodeFromSearch = (query, callback) => {
    let url = `http://transportapi.com/v3/uk/places.json?query=${query}&type=train_station&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.member.length === 0) {
            callback("Unable to find station code. Try another search.", undefined);
        } else {
            console.log("Station code: " + response.body.member[0].station_code)
            callback(undefined, {
                station_code: response.body.member[0].station_code
            });
        }
    })
}

module.exports = getStationCodeFromSearch