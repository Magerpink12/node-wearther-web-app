const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=2f922e5f163d3bb9af194de07771dec4&units=metric' 
    request({ url, json: true }, (error, response) => {
        if (error) {
           // console.log(error)
            callback('Unable to connect to weather service!', undefined)
        } else if (response.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.weather[0].description + ' It is currently ' + response.body.main.temp + ' degress out.')
        }
    })
}

module.exports = forecast