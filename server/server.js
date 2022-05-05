require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 7001;
require("./db/connections");

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
const postRoute = require('./routes/posts');

const Post = require("./models/Post");


app.use(cors());
app.use(express.json());

// app.use(express.json());

app.post("/article", async(req,res) =>{
    try{
        const user = new Post(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/article", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username:username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

app.get("/article/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});

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


app.listen(PORT, () => { 
  console.log(`Server started at ${PORT}`);
})