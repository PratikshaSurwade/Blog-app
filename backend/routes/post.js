const Post = require("../models/Post");

const router = require("express").Router();


router.post("/article", async(req,res) =>{
    try{
        const user = new Post(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/article", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

  
router.get("/article/:id", async (req, res) => {
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

module.exports = router;