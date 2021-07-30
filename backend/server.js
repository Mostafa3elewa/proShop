const express = require("express");
const products = require("./data/products")
const dotenv = require ("dotenv");

dotenv.config();

const app =express();

Port = process.env.PORT;

app.get("/", (req,res) => {
  res.send("API is running");});
app.get("/api/products", (req,res) => {
  res.send(products)});
  app.get("/api/products/:id", (req,res) => {
    const product = products.find((p)=> p._id === req.params.id) 
    res.send(product)});


app.listen(Port,console.log(`server running in ${process.env.NODE_ENV} mode on ${Port}`));
