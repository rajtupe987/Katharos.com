const express=require("express");
const {mensmodel}=require("../model/mens.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const mensRoute=express.Router();


mensRoute.get("/",async(req,res)=>{
    try {
        
        const data=  await mensmodel.find();
        res.send(data);

    } catch (error) {
        res.send({"msg":"Error while getting the data"})
    }
})

mensRoute.post("/create",async(req,res)=>{

  try {
    const payload=req.body;
    const data=new mensmodel(payload);
     await data.save()
    res.send({"msg":"data has been created"})
  } catch (error) {
    res.send({"msg":"Erro while posting the data"})
  }
   
});


module.exports={
    mensRoute
}