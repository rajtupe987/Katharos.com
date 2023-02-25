const express = require("express");
const {swetermodel} = require("../model/TOPS & SWEATERS");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sweterRoute = express.Router();

sweterRoute.get("/", async(req, res) => {

    try {
        const womendata=await swetermodel.find();
        res.send(womendata)
    } catch (error) {
         res.send({"msg":"Erro while getting women data"})
    }
  

});

sweterRoute.post("/createsweterdata", async (req, res) => {
    const {id,image,title,diss,price} = req.body;
    
    try {
        const app = new swetermodel({id,image,title,diss,price });
        await app.save();
        res.send(({ "mag": "sweter data created" }));  
    } catch (error) {
        res.send({"msg":"Error while posting sweter data"})
    }
});

module.exports={
    sweterRoute
}