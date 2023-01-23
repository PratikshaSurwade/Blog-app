const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 7001;

dotenv.config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


//Article page
// const footer1 = require('./jsonData/footerdata1');
// const footer2 = require('./jsonData/footerdata2');

//Categories page
const topposts = require('./jsonData/topposts');
// const bollywood = require('./jsonData/bollywood');

// const technology = require('./jsonData/technology');
// const hollywood = require('./jsonData/hollywood');
// const food = require('./jsonData/food');
// const fitness = require('./jsonData/fitness');

//homepage posts
const homepage = require('./jsonData/homepage')
const thelatest = require('./jsonData/latestdata');
// const latestartdata1 = require('./jsonData/latestartdata');
const homestory = require('./jsonData/storydata');

const Post = require("./models/Post");
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  // useCreateIndex:true, 
  useUnifiedTopology:true
}).then( () => {
  console.log("Conection is successful");
}).catch( (e) => {
  console.log("No Connection");
})

//Connecting frontend and backend
app.use(cors());
app.use(express.json());

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


app.get("/api/:cat" , async (req,res) => {
  const cat =  req.params.cat;
  console.log(cat);
  try {
    const post = await Post.find({
            categories: {
              $in : [cat],
            },
          });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get('/homepage', bodyParser.json(), (req, res) => {
	res.json(homepage);
});

app.get('/topposts', bodyParser.json(), (req, res) => {
	res.json(topposts);
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

// ------------------------Deployment------------------------

// if(process.env.NODE_ENV ==='production'){
//   app.use(express.static('/frontend/build'));
// }
// else{
//   app.get('/', (req, res) => {
//     res.send("API is running");
//   });
// }
// ------------------------Deployment------------------------

app.listen(PORT, () => { 
  console.log(`Server started at ${PORT}`);
})