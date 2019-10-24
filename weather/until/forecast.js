const request = require('request')

const forecast = (latitue,longtitue,callback)=>{
    const url = 'https://api.darksky.net/forecast/bcb06c06acd758e9bd87d695a1a10d69/' + latitue + ',' + longtitue

    request({ url , json: true} ,(error,{body})=>{
        if(error)
        {
            callback('Unable to conect', undefined);
        } else if(body.error)
        {
          callback('Can not find location', undefined)
        }
        else{
            callback(undefined,body.daily.data[0].summary + ' It is current ' + body.currently.temperature + 'degress out. There is a ' + body.currently.precipProbability) 
        }
    })
}

module.exports = forecast