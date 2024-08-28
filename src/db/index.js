import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}` //conncted to the database
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}` // To know where the host is connected
    );
  } catch (error) {
    console.log("MONGODB connection error: ", error);
    process.exit(1); //exists the process after getting the error.
  }
};

export default connectDB;
