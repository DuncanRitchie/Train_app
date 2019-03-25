const request = require("request");

const getNewsFromStationCode = (station_code, callback) => {
    let url = `https://transportapi.com/v3/uk/train/station/${station_code}/live.json?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to train services!", undefined);
        } else if (response.body.departures.all.length === 0) {
            console.log(response.body.departures.all)
            callback("Unable to find news. Try another search.", undefined);
        } else {
            // let delayedTrains = response.body.departures.all.filter((delayedTrain) => {
            //     return delayedTrain.status === 'Late'
            // })
            callback(undefined, {
                news: response.body.departures.all
            });
        }
    });
};

module.exports = getNewsFromStationCode