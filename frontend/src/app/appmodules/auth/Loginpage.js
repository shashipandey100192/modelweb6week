import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Loginpage() {
    const mynav = useNavigate();

const [email, setem] = useState("");
const [pass,setps]=useState("");

const updateemail  = (e)=>{
        setem(e.target.value);
}

const updatepassword = (p)=>{
    setps(p.target.value);
    // console.log(p);
}

const myformsubmit = async ()=>{
    if(email==="" || pass==="")
    {
        alert("user and password is blank");
    }
    else
    {
        await axios.post("https://modelweb6week.onrender.com/userlogin",{email,pass}).then((d)=>{
            console.log(d);

            if(d.data.status===440)
            {
                // alert(d.data.msg);
                toast.warning(d.data.msg,{autoClose:2000,position: "top-left",theme: "dark"});
            }

            if(d.data.status===421)
            {
                toast.warning(d.data.msg,{autoClose:2000,position: "top-left",theme: "dark"});
            }

            if(d.data.status===221)
            {
                toast.success(d.data.msg,{autoClose:2000,position: "top-left",theme: "dark"});
                setTimeout(()=>{
                    mynav('/dashboard');
                },2000);
            }



        });
    }
}


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h3 mb-3'>Logon page</p>
                                <ToastContainer/>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" value={email} onInput={updateemail}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" value={pass}  onInput={updatepassword}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-success" value="submit" onClick={myformsubmit}/>
                                    <Link to="registor">Registor now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage