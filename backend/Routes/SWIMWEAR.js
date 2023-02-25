const express = require("express");
const {swimmermodel}=require("../model/SWIMWEAR")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const swimmerRoute = express.Router();

swimmerRoute.get("/", async(req, res) => {

    try {
        const womendata=await swimmermodel.find();
        res.send(womendata)
    } catch (error) {
         res.send({"msg":"Erro while getting swimmer data"})
    }
  

});

swimmerRoute.post("/createswimmerdata", async (req, res) => {
    const {id,image,title,diss,price} = req.body;
    
    try {
        const app = new swimmermodel({id,image,title,diss,price });
        await app.save();
        res.send(({ "mag": "swimmer data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting swimmer data"})
    }
});

module.exports={
    swimmerRoute
}