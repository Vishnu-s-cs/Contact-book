const jwt = require("jsonwebtoken");
const User = require('../models/users.model');
function verify(req, res, next) {
  //double checking for accessToken because in some cases cookie wont send readly with req object after https encryption
  const authHeader =
    req.cookies.accessToken || req.headers?.cookie?.split("=")[1];
    
  if (authHeader) {
    const token = authHeader;

    jwt.verify(token, process.env.SECRET, async (err, user) => {
      if (err) res.status(404).json("Token is not valid!") && next([err]);
      else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

const verifyTokenAndAuthorization=(req,res,next)=>{
  verify(req,res,async()=>{
   
      if(req.params.id===req.user.id){
          next()
      }else{
          res.status(403).json('you are not allowed to to that!')
      }
  })
}

module.exports = { verify, verifyTokenAndAuthorization };
