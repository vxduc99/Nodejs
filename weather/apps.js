const geocode = require('./until/geocode')
const forecast = require('./until/forecast')

const address = process.argv[2]

if(!address)
{
   console.log('Please provide an address!!!')
}
else{
   geocode(address,(error, {latitue, longtitue, location})=>{
      if(error)
      {
         return console.log(error)
      }
   
      forecast(latitue, longtitue, (error, foreCastData) => {
         if(error)
         {
            return console.log(error)
         }
   
         // console.log('Error', error)
         // console.log('Data', data)
        // console.log(data.location)
         console.log(location)
         console.log(foreCastData)
       })
    })
}