require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
//article page
const footer1 = require('./jsonData/footerdata1');
const footer2 = require('./jsonData/footerdata2');
//bollywood page
const bollydata1 = require('./jsonData/bollydata1');
const bollydata2 = require('./jsonData/bollydata2');
//homepage
const thelatest = require('./jsonData/latestdata');
const latestartdata1 = require('./jsonData/latestartdata');
const homestory = require('./jsonData/storydata');
const totalarticles = require('./jsonData/totalarticles');



app.use(cors());

app.get('/footer1', bodyParser.json(), (req, res) => {
	res.json(footer1);
});

app.get('/footer2', bodyParser.json(), (req, res) => {
	res.json(footer2);
});


app.get('/bollydata1', bodyParser.json(), (req, res) => {
	res.json(bollydata1);
});

app.get('/bollydata2', bodyParser.json(), (req, res) => {
	res.json(bollydata2);
});


app.get('/thelatest', bodyParser.json(), (req, res) => {
	res.json(thelatest);
});
app.get('/latestart', bodyParser.json(), (req, res) => {
	res.json(latestartdata1);
});

app.get('/homestory', bodyParser.json(), (req, res) => {
	res.json(homestory);
});

app.get('/totalarticles', bodyParser.json(), (req, res) => {
	res.json(totalarticles);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
})