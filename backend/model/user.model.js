const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
<<<<<<< HEAD
      name : String,
      email : String,
      gender:String,
      city:String,
      age : Number,
=======
     name : String,
     email : String,
>>>>>>> 4d54fb27743214664bb426f23977bda52a89678c
      pass : String
     
    
});


const usermodel=mongoose.model("member",userSchema);

module.exports={
    usermodel
}