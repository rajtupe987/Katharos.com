const jwt=require("jsonwebtoken");

const authenticate=(req,res,next)=>{
  
    const token=req.headers.authorization;

    if(token){
        jwt.verify(token,"kath",(err,decoded)=>{
 
            if(decoded){   
                req.body.userId=userId.decoded
                next();
            }else{
               res.send({"msg":"Please Login"})
            }
        });
       
    }else{
        res.send({"msg":"Please Login"})
    }
};

module.exports={
    authenticate
}