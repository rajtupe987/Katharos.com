const mongoose=require("mongoose");

const mensSchema=mongoose.Schema({
     
     image:String,
     title:String,
     content:String,
     price:Number

});


const mensmodel=mongoose.model("mens",mensSchema);

module.exports={
    mensmodel
}