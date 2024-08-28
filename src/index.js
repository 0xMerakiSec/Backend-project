// require("dotenv").config({path: './env'});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
//CONNECTING TO THE DATABASE
(async () => {
  //using the IIFE method to connect to the database
  try {
    //using the try and catch method to connect to the database as the best practice method
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); //getting the URI from the .env file
  } catch (error) {
    console.error("ERROR: ", error); //incase of the error this is executed
    throw error;
  }
})();
*/
