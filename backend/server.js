const express = require("express");
const cors = require('cors');
const myapp = express();
require('dotenv').config();
require('./database/connectdb');
const myrouting = require("./routing/routes");

const port = process.env.PORT || 6900







myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouting);




myapp.listen(port,()=>{
    console.log(`server is runing ${port}`);
})


