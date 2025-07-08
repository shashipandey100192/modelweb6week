import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {

const [em, setem] = useState("");
const [ps,setps]=useState("");

const updateemail  = (e)=>{
        setem(e.target.value);
}

const updatepassword = (p)=>{
    setps(p.target.value);
    console.log(p);
}

const myformsubmit = ()=>{
    if(em==="" || ps==="")
    {
        alert("user and password is blank");
    }
    else
    {
        alert("welcome to dashboard");
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
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" value={em} onInput={updateemail}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" value={ps}  onInput={updatepassword}/>
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