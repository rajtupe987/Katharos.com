const mongoose=require("mongoose");

const womenSchema=mongoose.Schema({
    id:Number,
    image : String,
    title : String,
    diss : String,
    price:Number
    
});


const womenmodel=mongoose.model("women",womenSchema);

module.exports={
    womenmodel
}