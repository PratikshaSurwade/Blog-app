const Post = require("../models/Post");

const router = require("express").Router();

const jwt = require("jsonwebtoken")

//verify if login

const verifyToken = (req ,res,next ) => {
  const authHeader = req.headers.token
  if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err && err.name ==="TokenExpiredError") return res.status(403).json({success:false ,message:"Your Token is Expired !"});
        if (err && err.name !=="TokenExpiredError") return res.status(403).json({success:false ,message:"Your Token is Not valid !"});
        req.user = user;
          next();
      });
  } else {
      return res.status(401).json({success:false ,message:"You are not authenticated!"});
  }
}

router.post("/article", verifyToken ,async(req,res) =>{
    try{
        const user = new Post(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})
//Get all Posts
router.get("/article", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single Post to read

router.get("/article/:id", verifyToken ,async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/api/:cat" , async (req,res) => {
  const cat =  req.params.cat;
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

router.get("/article/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
router.put("/article/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id);
    console.log(updatedPost)
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;