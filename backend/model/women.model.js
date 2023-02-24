const mongoose=require("mongoose");

const womenSchema=mongoose.Schema({
    image : String,
    title : String,
    diss : String,
    price:String
    
});


const womenmodel=mongoose.model("women",womenSchema);

module.exports={
    womenmodel
}