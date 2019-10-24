const request = require('request')

const forecast = (latitude,longtitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/bcb06c06acd758e9bd87d695a1a10d69/' + latitude + ',' + longtitude

    request({ url , json: true} ,(error,{body})=>{
        if(error)
        {
            callback('Unable to conect', undefined);
        } else if(body.error)
        {
          callback('can not find location', undefined)
        }
        else{
            callback(undefined,body.daily.data[0].summary)
        }
    })
}

module.exports = forecast