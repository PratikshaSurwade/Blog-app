const router = require("express").Router();

const User = require("../models/User");

const jwt = require("jsonwebtoken");

const verifyToken = (req ,res,next ) => {
  const authHeader = req.headers.token
  if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
          if (err && err.name ==="TokenExpiredError") return res.status(403).json({success:false ,message:"Your Token is Expired !"});
          if (err && err.name !=="TokenExpiredError") return res.status(403).json({success:false ,message:"Your Token is Not valid !"});
          req.user = user;
          next();
          console.log("pass token")

      });
  } else {
      return res.status(401).json({success:false ,message:"You are not authenticated!"});
  }
}

//verify if login by same account
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id) {
        next();
        console.log("pass token")
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };
//Get User

router.get("/:id" , verifyToken , async (req,res)=> {
    try {
        const userDetails = await User.findById(req.params.id);
        res.status(200).json(userDetails);   
        
        // const accessToken = req.headers.token;
        // const { password, ...others } = userDetails._doc;
        // console.log({...others,accessToken})
        //   res.status(200).json({ ...others, accessToken });        
        //   console.log("userrrrrrrrr",{ ...others, accessToken })
    } catch (error) {
        res.status(500).json(error);
    }
})


//Delete User

// router.delete("/:id" , verifyTokenAndAuthorization , async (req,res)=> {
//     try {
//         const userDetails = await User.findByIdAndDelete(req.params.id);
//         res.status(200).json("User has been deleted...");
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })



//Update User
module.exports = router;