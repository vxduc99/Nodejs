const request = require('request')
const yargs = require('yargs')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoidnhkdWM5OSIsImEiOiJjazBhZHZiaXowMWNmM2JxcGdubHZ4Z2dqIn0.SuUC9Vn4hkUB7q8IvaWCqQ&limit=1'
   
    request({url, json: true},(error, { body })=>{
     if(error)
     {
         console.log('Unable to conect', undefined);
     } else if(body.features.length === 0)
     {
       callback('can not find location', undefined)
     }
     else{
         callback(undefined,{
           latitude: body.features[0].center[1],
           longtitude: body.features[0].center[0],
           location: body.features[0].place_name
         })
     }
   })
}

module.exports = geocode