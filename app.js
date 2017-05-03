let connection = require('./models/sequelize-connection')
let Country = require('./models/country')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })

app.get('/:continent', function (request, response) {
  let c = request.params.continent
  let countries = Country.findAll({where: {continent: c}}).then(function(countries){
    response.render('index', {countries: countries})
  })
})

app.get('/', function (request, response) {
  response.render('home')
})

app.post('/searchCountry', function (request, response) {
  let country = request.body.countryName
  console.log(country)
  let selection = Country.findAll({where: {name: country}}).then(function(countryData){
    let mapped = countryData.map(function(country){
      return country.get()
    })
    console.log(mapped)
    response.render('countryView', {mapped: mapped[0]})
  })
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

// Country.findAll({attributes: ['name', 'code'], where: {continent: 'Asia'}}).then(function(countries){
  // let mapped = countries.map(function(country){
  //   return country.get()
  // })
  // console.log(mapped)
  // return Promise.all(mapped)
// }).then(function(results){
// })
