import mongoose from "mongoose";
// const dotenv = require("dotenv").config();

export default async function connect(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected")
}