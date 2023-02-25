const express = require("express");
const {shoesmodel}=require("../model/SHOES & ACCESSORIES")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const shoesRoute = express.Router();

shoesRoute.get("/", async(req, res) => {

    try {
        const shoesdata=await shoesmodel.find();
        res.send(shoesdata)
    } catch (error) {
         res.send({"msg":"Erro while getting sleep data"})
    }
  

});

shoesRoute.post("/createshoesdata", async (req, res) => {
    const {id,image,title,diss,price} = req.body;
    
    try {
        const app = new shoesmodel({id,image,title,diss,price });
        await app.save();
        res.send(({ "mag": "shoes data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting shoes data"})
    }
});

module.exports={
    shoesRoute
}