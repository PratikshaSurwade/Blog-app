const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      password: hashedPass
    });
    const user = await newUser.save();
    console.log(user);
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SEC,
      { expiresIn: '1d' }
    );
    // res.status(200).json({ ...user,accessToken });  
    //           { expiresIn: '20s' }

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    // res.status(500).json(err.keyValue);
    console.log(err)
    if (err.name === "ValidationError") {
      res.status(409).send(`${err}`);
    }
    if (err.code === 11000) {
      res.status(409).send(`An account with that ${Object.keys(err.keyValue)} already exists.`);
    }
    else {
      res.status(500).json("An Unknown Error Occurred Please Try Again After sometime!");
    }
  }
})

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcryptjs.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SEC,
      // { expiresIn: '20s' }
      { expiresIn: '2d' }
    );
    //   to hide password in login check
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json("An Unknown Error Occurred Please Try Again After sometime!");
  }
})

module.exports = router;