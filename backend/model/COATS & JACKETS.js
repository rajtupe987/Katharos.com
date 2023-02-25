const mongoose=require("mongoose");

const jacketsSchema=mongoose.Schema({
    id:Number,
    image : String,
    title : String,
    diss : String,
    price:Number
    
});


const jacketsmodel=mongoose.model("jackets",jacketsSchema);

module.exports={
    jacketsmodel
}