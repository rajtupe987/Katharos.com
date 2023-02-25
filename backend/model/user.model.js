const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
     name : String,
     email : String,
      pass : String
     
    
});


const usermodel=mongoose.model("member",userSchema);

module.exports={
    usermodel
}