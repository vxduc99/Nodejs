const https = require('https')

const url = 'https://api.darksky.net/forecast/bcb06c06acd758e9bd87d695a1a10d69/40,-75'

const request = https.request(url,(response)=>{
    let data = ''

    response.on('data',(chunks)=>{
        data = data + chunks.toString()
    })

    response.on('end',()=>{
        const temp = JSON.parse(data)
        console.log(temp)
    })
})

request.on('error',(error)=>{
    
})


request.end()