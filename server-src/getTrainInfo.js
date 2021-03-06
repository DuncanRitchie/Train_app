const request = require("request");

const getTrainInfoFromStationCode = async function(fromStationCode, toStationName, date, time, callback) {
    let url = `http://transportapi.com/v3/uk/train/station/${fromStationCode}/${date}/${time}/timetable.json?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    console.log(url)
    

    request({ url, json: true }, (error, response) => {
        
     
        // console.log(response.body)
        if (error) {
            callback('Unable to connect to train services', undefined);
        } else if (!response.body.departures || response.body.departures.all.length === 0) {
            callback("Unable to find train info. Try another search.", undefined);
  
        }else{ 
            let outboundResult = response.body.departures.all.filter((station) => {
                return station.destination_name === toStationName})
                callback(undefined, outboundResult)
        }
        
          
            // } else if (toStationCode === undefined) {
            //  } else {
            // let stations =response.body.departures.all.map((station) => {
            //     console.log(station.destination_name)
            // return station.destination_name === "London Euston"
            // })

        // callback(undefined, { allDepartures: response.body.departures.all });
        //  }
        //else 
        //{
        //     console.log('departures')
        //     console.log(response.body.departures)
        //     console.log('departures.all')
        //     console.log(response.body.departures.all)
        //     let wantedDepartures = [];
        //     for (i = 0; i < response.body.departures.all.length; i++) {
        //         let currentDeparture = response.body.departures.all[i];
        //         let service = response.body.departures.all[i].service;
        //         console.log("Checking service " + service)
        //         let url = `https://transportapi.com/v3/uk/train/service/${service}///timetable.json?app_id=fea7751f&app_key=702c5fbff7c11ddaa834da79ac4e6ddf&darwin=false&live=false`;
        //         request({ url, json: true }, (error, res) => {
        //             if (error) {
        //                 console.log(error)
        //                 callback("Unable to get information on stations calling at. Try another search.", undefined)
        //             } else {
        //                 for (j = 0; j < res.body.stops.length; j++) {
        //                     console.log(`Checking station ${j} - ${res.body.stops[j].station_name}`)
        //                     if (res.body.stops[j].station_code == toStationCode) {
        //                         console.log("This is the toStation!")
        //                         wantedDepartures.push(currentDeparture)
        //                     }
        //                 }
        //                 if (wantedDepartures.length === 0 ) {
        //                     console.log("No services found")
        //                     callback(`No services found going from ${fromStationCode} to ${toStationCode}`, undefined)
        //                 } else {
        //                     console.log(wantedDepartures)
        //                     callback(undefined, { allDepartures: wantedDepartures })
        //                 }
        //             }
        //         })
        //     } 
        //     }
        // })
    })
}

module.exports = getTrainInfoFromStationCode