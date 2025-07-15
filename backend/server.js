const express = require("express");
const myapp = express();
require('dotenv').config();
require('./database/connectdb');
const port = process.env.PORT || 6900

myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
});






myapp.listen(port,()=>{
    console.log(`server is runing ${port}`);
})


