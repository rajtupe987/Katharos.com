const express = require("express");
const {jacketsmodel}=require("../model/COATS & JACKETS")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const jacketsRoute = express.Router();

jacketsRoute.get("/", async(req, res) => {

    try {
        const jacketsdata=await jacketsmodel.find();
        res.send(jacketsdata)
    } catch (error) {
         res.send({"msg":"Erro while getting jacket data"})
    }
  

});

jacketsRoute.post("/createjacketdata", async (req, res) => {
    const {id,image,title,diss,price} = req.body;
    
    try {
        const app = new jacketsmodel({id,image,title,diss,price });
        await app.save();
        res.send(({ "mag": "jacket data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting jacket data"})
    }
});

module.exports={
    jacketsRoute
}