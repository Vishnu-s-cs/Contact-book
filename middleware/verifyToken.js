const jwt = require("jsonwebtoken");

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

module.exports = { verify };
