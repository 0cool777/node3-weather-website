const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ae359b52d26c47b94433975ca416861&query='+ latitude +','+ longitude

    request ({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currTemp = body.current.temperature
            const feelTemp = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            const humidity = body.current.humidity
            callback(undefined, weatherDescription + '. It is currently ' + currTemp +' degrees out. It feels like ' + feelTemp + ' degrees out. With a humidity of ' + humidity + '%.')
        }
    })
}

module.exports = forecast