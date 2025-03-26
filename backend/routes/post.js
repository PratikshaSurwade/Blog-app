const Post = require("../models/Post");

const router = require("express").Router();

const jwt = require("jsonwebtoken")

//verify if login

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err && err.name === "TokenExpiredError") return res.status(403).json({ success: false, message: "Your Token is Expired !" });
      if (err && err.name !== "TokenExpiredError") return res.status(403).json({ success: false, message: "Your Token is Not valid !" });
      req.user = user;
      console.log(user, "user")

      next();
    });
  } else {
    return res.status(401).json({ success: false, message: "You are not authenticated!" });
  }
}

//verify if login by same account
const verifyTokenAndAuthorization = (req, res, next) => {
  console.log(req.body, "body")

  verifyToken(req, res, () => {
    console.log(req.user.id, "nammeemme")
    console.log(req.body.userId)
    if (req.user.id === req.body.userId) {
      next();
    } else {
      res.status(403).json({ success: false, message: "You are not alowed to do that!" });
    }
  });
};
//handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (e, res) => {
  let errors = Object.values(e.errors).map(el => el.message);
  var fields = Object.values(e.errors).map(el => el.path);
  var code = 400;
  if (errors.length > 1) {
    const formattedErrors = errors.join('')
    res.status(code)
      .send({ message: formattedErrors, fields: fields });
  } else {
    res
      .status(code)
      .send({ message: errors, fields: fields })
  }
}
router.post("/article", verifyToken, async (req, res) => {
  console.log("inside post")
  try {
    console.log("inside try")

    const post = new Post(req.body);
    const newPost = await post.save();
    res.status(201).send(newPost);
  } catch (e) {
    console.log(e);
    if (e.name === 'ValidationError') return err = handleValidationError(e, res);
    // res.status(400).send(e);
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

router.get("/article/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/:cat", async (req, res) => {
  const cat = req.params.cat;
  try {
    const post = await Post.find({
      categories: {
        $in: [cat],
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

// update post
router.put("/article/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    console.log("inside ud")
    console.log(req.body)
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true });
    console.log(updatedPost)
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

//Get users's Posts

router.get("/user/:id/posts", verifyToken, async (req, res) => {
  try {
    const userDetails = await Post.find({ userId: req.params.id });
    res.status(200).json(userDetails);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

//Delete Post

router.delete("/post/:id", verifyToken, async (req, res) => {
  console.log(req.params.id)
  try {
    const userDetails = await Post.findByIdAndDelete(req.params.id);
    console.log(userDetails)
    res.status(200).json("Post has been deleted...");
  } catch (error) {
    console.log(error)

    res.status(500).json(error);
  }
})

module.exports = router;