const mongoose=require("mongoose");

const sleepwereSchema=mongoose.Schema({
    id:Number,
    image : String,
    title : String,
    diss : String,
    price:Number
    
});


const sleepmodel=mongoose.model("sleepweare",sleepwereSchema);

module.exports={
    sleepmodel
}