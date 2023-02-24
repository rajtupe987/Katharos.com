const jwt=require("jsonwebtoken");

const authenticate=(req,res,next)=>{
  
    const token=req.headers.authorization;

    if(token){
<<<<<<< HEAD
        jwt.verify(token,"raj",(err,decoded)=>{
 
            if(decoded){
                
                 req.body.userId=decoded.userId
                
=======
        jwt.verify(token,"kath",(err,decoded)=>{
 
            if(decoded){   
                req.body.userId=userId.decoded
>>>>>>> 4d54fb27743214664bb426f23977bda52a89678c
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
