import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import colors  from "colors";
import productRoutes from "./routes/productsRoutes.js";

dotenv.config();

connectDB();

const app =express();

const Port = process.env.PORT;

app.get("/", (req,res) => {
  res.send("API is running");});


  app.use("/api/products" , productRoutes)


app.listen(Port,console.log(`server running in ${process.env.NODE_ENV} mode on ${Port}`.yellow.bold));
