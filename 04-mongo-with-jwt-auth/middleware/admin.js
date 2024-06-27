// Middleware for handling auth

const jwt=require('jsonwebtoken');
const secret=require("../index")
function adminMiddleware(req, res, next) {
   const token=req.headers.authorization;
   //bearer ncdcdwnkdwc
    //ncdcdwnkdwc
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedToken=jwt.verify(token,secret);
    if(decodedToken.username){
        next();
    }else{
        res.status(403).json({msg:"you are not authenticated"})
    }


    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;