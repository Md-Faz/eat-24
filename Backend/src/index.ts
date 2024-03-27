import express  from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";

//connecting mongoose atlas, the online version of mongoose not local database, go through the steps in the website for this
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then( () => {
    console.log("database connected")
})

//initialize express as app
const app = express();

//this is a middleware, telling to convert the req to json
app.use(express.json())
app.use(cors())

//here we 
app.get("/test", async (req, res) => {
    res.json({message: "hello"});
});

app.listen(7000, ()=>{
    console.log("server started")
});