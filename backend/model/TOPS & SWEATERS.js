const mongoose=require("mongoose");

const swetersSchema=mongoose.Schema({
    id:Number,
    image : String,
    title : String,
    diss : String,
    price:Number
    
});


const swetermodel=mongoose.model("sweter",swetersSchema);

module.exports={
    swetermodel
}