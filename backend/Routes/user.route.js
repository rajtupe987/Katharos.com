const express=require("express");
const {usermodel}=require("../model/user.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userRoute=express.Router();


userRoute.post("/register",async(req,res)=>{

    const {name,email,pass} = req.body;
   
    const mail=await usermodel.find({"email":email});
 
    if(mail.length>0){
     res.send({"msg":"user alreay register plz login"})
    }else{
     try {
     
         bcrypt.hash(pass,5,async(err,hash)=>{
     
             if(err){
                 res.send(({"msg":"Sonmething went wrong"}))
             }else{
                const app= new usermodel({name,email,pass:hash});
                await app.save();
                 res.send(({"mag":"New user created"}))
             }
         })
        } catch (error) {
         res.send(({"msg":"Sonmething went wrong"}))
        }

    }
});


userRoute.post("/login",async(req,res)=>{
    
    try {
        const {email,pass}=req.body;
        let member=await usermodel.find({email});
        if(member.length>0){
            bcrypt.compare(pass,member[0].pass,(err,result)=>{
                if(result){
                    let token=jwt.sign({userId:member[0]._id},"kath");
                    res.send({"msg":"User Logged in","token":token});
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            })
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
    } catch (error) {
        res.send({"msg":"Error while login"})
    }
});




userRoute.patch("/update/:id",async(req,res)=>{
    
  const userid=req.params.id;
  const payload=req.body;

    try {
        await usermodel.findByIdAndUpdate({_id:userid},payload);
        res.send({"msg":"User has been updated"})
    } catch (error) {
        res.send({"msg":"Error while updating the user "})
    }
});




userRoute.delete("/delete/:id",async(req,res)=>{
    
    try {
        const userid=req.params.id;
        await usermodel.findByIdAndDelete({_id:userid});
        res.send({"msg":"User has been deleted"})
    } catch (error) {
        res.send({"msg":"Error while deleting the user"})
    }
});

module.exports={
    userRoute
}