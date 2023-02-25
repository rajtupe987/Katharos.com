const express=require("express");
require("dotenv").config();
const {connection}=require("./config/db");
const {userRoute}=require("./Routes/user.route");
const {authenticate}=require("./middleware/Auth.middleware");
const cors=require("cors");


const {womenRoute}=require("./Routes/women.route")
const {sweterRoute}=require("./Routes/TOPS & SWEATERS")
const {swimmerRoute}=require("./Routes/SWIMWEAR")
const {sleepRoute}=require("./Routes/SLEEPWEAR")
const {shoesRoute}=require("./Routes/SHOES & ACCESSORIES.routes")
const {jacketsRoute}=require("./Routes/COATS & JACKETS");
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("WELCOME")
})






app.use("/member",userRoute);
app.use("/women",womenRoute);
app.use("/sweter",sweterRoute);
app.use("/swimwear",swimmerRoute);
app.use("/sleep",sleepRoute);
app.use("/shoes",shoesRoute);
app.use("/jackets",jacketsRoute)
app.use(authenticate)

// console.log()
app.listen(process.env.port,async()=>{

    try {
         await connection;
         console.log("connected to DB")
    } catch (error) {
        console.log("Error while connecting to DB")
    }
    console.log(`port is running at ${process.env.port}`)
})