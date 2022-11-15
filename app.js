//IMPORTS
//import express from 'express'; as in ES6
const express=require("express");
// Create an Express application by writing the following piece of code.
const app=express();
//importing books 
const books=require("./routes/books");

//MIDDLEWARES
//Now, lets add middleware so that our server can recognize the incoming request as a JSON object.
app.use(express.json());
app.use("/books",books);
//PORTS
app.listen(3000);





