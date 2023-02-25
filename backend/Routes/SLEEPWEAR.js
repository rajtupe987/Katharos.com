const express = require("express");
const {sleepmodel}=require("../model/SLEEPWEAR")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sleepRoute = express.Router();

sleepRoute.get("/", async(req, res) => {

    try {
        const sleepdata=await sleepmodel.find();
        res.send(sleepdata)
    } catch (error) {
         res.send({"msg":"Erro while getting sleep data"})
    }
  

});

sleepRoute.post("/createsleepdata", async (req, res) => {
    const {id,image,title,diss,price} = req.body;
    
    try {
        const app = new sleepmodel({id,image,title,diss,price });
        await app.save();
        res.send(({ "mag": "sleep data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting sleep data"})
    }
});

module.exports={
    sleepRoute
}