'Access-Control-Allow-Origin'

const exporess = require('express');
const myapp = exporess.Router();
const mycollectionname = require("../schima/datamodel");


myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
});


myapp.get("/test",(req,res)=>{
    res.send("external routing is working");
})

myapp.post("/userregistor", async (req,res)=>{
    const {fullname,email,dob,pass,gender}  = req.body;
    const a = await mycollectionname({fullname,email,dob,pass,gender}).save();
    res.send({data:a,msg:"successfully submit data",status:251});
});


myapp.get("/allusers", async(req,res)=>{
    const userlist = await mycollectionname.find();
    res.send({alluser:userlist,msg:"display all userlist",status:221});
})


module.exports = myapp;


