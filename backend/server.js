const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const Post = require("./models/Post");
const userRoute = require("./routes/post");


const PORT = process.env.PORT || 7001;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
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

app.use("/", userRoute);

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