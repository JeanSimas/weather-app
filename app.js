// Watch the Call Stack, Callback Queue, and Event Loop class after finishing this app

const request = require('request')
const geoCode = require('./geocode')
const forecast = require('./forecast')

geoCode('Iguaba Grande', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                console.log(`Error : ${error}`)
            } else {
                console.log(data)
            }
        })
    }



})