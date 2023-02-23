const express=require("express");
require("dotenv").config();
const {connection}=require("./config/db");
const {userRoute}=require("./Routes/user.route");
const {authenticate}=require("./middleware/Auth.middleware");
const cors=require("cors");



const {mensRoute}=require("./Routes/Mens.routes")


const app=express();
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("WELCOME TO KATHORES")
});




app.use("/mens",mensRoute);
app.use("/users",userRoute);
 app.use(authenticate);




app.listen(process.env.port,async()=>{

    try {
         await connection;
         console.log("connected to DB")
    } catch (error) {
        console.log("Error while connecting to DB")
    }
    console.log(`port is running at ${process.env.port}`)
})