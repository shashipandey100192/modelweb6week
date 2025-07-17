import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';



function Registorpage() {

    const mynav = useNavigate();
    const {register, handleSubmit,formState: { errors }} = useForm();

const myformsubmit = async (e)=>{
    console.log(e);
    await axios.post('http://localhost:7800/userregistor',e).then((d)=>{
        console.log(d);
        if(d.data.status===251)
        {
            alert("registor successfully now");
                mynav("/userportal");

        }
    })

}



  return (
        <form onSubmit={handleSubmit(myformsubmit)}>
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h3 mb-3'>Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>email id required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" {...register("fullname",{required:true})}/>
                                    {errors.fullname && <p className='text-danger'>fullname is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" {...register("dob")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass",{required:true,minLength:5,maxLength:10})}/>
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>minimum 5 char required</p>}
                                    {errors.pass?.type==="maxLength" && <p className='text-danger'>password too much</p>}

                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    
                                    <input type="submit" class="btn btn-success" value="submit"/>
                                    <Link to="registor">Registor now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default Registorpage