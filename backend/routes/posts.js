const router = require("express").Router();
const Post = require("../models/Post");

//CREATE article
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
//GET article
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL Posts
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let posts;
    if (qCategory) {
      posts = await Post.find({
        categories: {
          $in: [qCategory],
        },
      });
    }  
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;