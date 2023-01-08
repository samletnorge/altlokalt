const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const path = require("path");
const request = require('request-promise-native');


//const date = require(__dirname + "/date.js");


const app = express();

app.set('view engine', "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


//home
app.get("/", function(req, res) {
    res.render(__dirname + "/index.ejs");
})

//about
app.get("/about", function(req, res) {
    res.render(__dirname + "/about.ejs");
})
//deals
app.get("/deals", function(req, res) {
    res.render(__dirname + "/deals.ejs");
})

//reservation
app.get("/reservation", function(req, res) {
    res.render(__dirname + "/reservation.ejs");
})
app.get('/bedrift', function (req, res) {
    res.render(__dirname + "/company.ejs");
});

app.get('/companies', (req, res) => {
    const municipality = req.query.municipality;
    const page = req.query.page;
  
    const options = {
      method: 'GET',
      uri: 'https://data.brreg.no/enhetsregisteret/api/enheter',
      qs: {
        'postadresse.poststed': municipality,
        'page': page,
        'size': 15
      },
      json: true
    };
  
    request(options)
      .then(response => {
        console.log(response._embedded.enheter[0].navn);
        res.send(response);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send({error: 'An error occurred while retrieving the companies'});
      });
  });


let port = process.env.PORT;
if (port == null || port == "") {
    port = 6051;
}

app.listen(port, function(req, res) {
    console.log("Server is running successfully");
});
