require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({extended: true}))


app.listen(process.env.PORT, ()=>{
  console.log(`We are live on ${process.env.HOST}:${process.env.PORT}...`)
})