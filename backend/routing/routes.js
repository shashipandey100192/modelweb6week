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
});


myapp.delete("/userdelete/:id",async (req,res)=>{
    const id = req.params.id;
    const removeuser = await mycollectionname.findByIdAndDelete({_id:id});
    res.send({alluser:removeuser,msg:"user delete",status:225});
});


myapp.get("/singleuser/:id", async(req,res)=>{
    const id = req.params.id;
    const singleuser = await mycollectionname.findById({_id:id});
    res.send({single:singleuser,msg:"get single user",status:251});
});


myapp.patch("/updateuser/:id", async (req,res)=>{
    const id = req.params.id;
    const updatedata = await mycollectionname.findByIdAndUpdate(id,req.body,{new:true});
    res.send({data:updatedata,msg:"user updated",status:370});
    
});

myapp.post("/userlogin", async (req,res)=>{
    const {email,pass} = req.body;
        if(email=="" || pass=="")
        {
            res.send({msg:"email and password is blank",status:420});
        }
        else
        {
            const loginuser = await mycollectionname.findOne({email:email});
                if(loginuser)
                {
                    if(loginuser.email==email && loginuser.pass==pass)
                    {
                        res.send({msg:"user login successfully",status:221});
                    }
                    else
                    {
                        res.send({msg:"password is not match",status:421});
                    }
                }
                else
                {
                    res.send({msg:"user not found",status:440});
                }
        }

})





module.exports = myapp;


