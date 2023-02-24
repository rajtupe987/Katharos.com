const express = require("express");
const { womenmodel } = require("../model/women.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const womenRoute = express.Router();

womenRoute.get("/", async(req, res) => {

    try {
        const womendata=await womenmodel.find();
        res.send(womendata)
    } catch (error) {
         res.send({"msg":"Erro while getting women data"})
    }
  

});

womenRoute.post("/createwomendata", async (req, res) => {
    const {  image,title,diss,price} = req.body;
    
    try {
        const app = new womenmodel({ image,title,diss,price });
        await app.save();
        res.send(({ "mag": "women data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting women data"})
    }
});

module.exports={
    womenRoute
}