const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./until/geocode')
const forecast = require('./until/forecast')

const app = express()

// define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlebar engine and view location
app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


// setup directory staticư
app.use(express.static(publicDirectoryPath))
// heello

// nhận request của server và trả lên interface
app.get('', (req, res)=>{
    // trả lên interface một file html động
    res.render('index',{
        title: 'Weather app',
        name: 'Tố Ngô'
    });
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'Hmm....',
        name: 'Tố Ngô'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{ 
        title: 'Help!!!!',
        name: 'Tố Ngô'
    })
})

app.get('/peguin',(req, res)=>{
    res.render('peguin')
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
 
app.get('/weather',(req, res)=>{
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/product',(req, res)=>{
    if(!req.query.search){
        return res.send({
            erorr: 'End'
        })
    }
    console.log(req.query.rating)
    res.send({
        product: []
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Duc',
        erorrMessage: '404 not found'
    })
})