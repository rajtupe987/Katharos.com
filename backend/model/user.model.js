const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
     name : String,
     email : String,
     gender:String,
     city:String,
     age : Number,
      pass : String
     
    
});


const usermodel=mongoose.model("member",userSchema);

module.exports={
    usermodel
}