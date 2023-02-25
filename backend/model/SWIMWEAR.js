const mongoose=require("mongoose");

const swimmerSchema=mongoose.Schema({
    id:Number,
    image : String,
    title : String,
    diss : String,
    price:Number
    
});


const swimmermodel=mongoose.model("swimmer",swimmerSchema);

module.exports={
    swimmermodel
}