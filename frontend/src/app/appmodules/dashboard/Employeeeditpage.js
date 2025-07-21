import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, Link, useParams } from 'react-router-dom';


function Employeeeditpage() {
    const { id } = useParams();
    const mynav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [user, updateuser] = useState({
        fullname: "",
        email: "",
        dob: "",
        gender: "",
        pass: ""

    });

    const getsingleuserdata = async () => {
        await axios.get(`http://localhost:7800/singleuser/${id}`).then((d) => {
            console.log(d.data.single);
            updateuser(d.data.single);
        })
    }

    useEffect(() => {
        getsingleuserdata();
    }, []);


    const updatefield = (e) => {
        const { name, value } = e.target;
        updateuser((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const myformsubmit = async () => {
       await axios.patch(`http://localhost:7800/updateuser/${id}`,user).then((d)=>{
        console.log(d);
       
        if(d.data.status===370)
        {
             alert(d.data.msg);
             mynav('/dashboard/employeelist');

        }
       })

    }




    return (
        <form onSubmit={handleSubmit(myformsubmit)}>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 shadow p-5'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <p className='h3 mb-3'>Edit User Details page</p>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Email address</label>
                                        <input type="email" class="form-control" {...register("email", { required: true })} value={user.email} name='email' onInput={updatefield} />
                                        {errors.email && <p className='text-danger'>email id required</p>}
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">FullName</label>
                                        <input type="text" class="form-control" {...register("fullname", { required: true })} value={user.fullname} name='fullname' onInput={updatefield} />
                                        {errors.fullname && <p className='text-danger'>fullname is required</p>}
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">DOB</label>
                                        <input type="date" class="form-control" {...register("dob")} value={user.dob} name='dob' onChange={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Gender</label>
                                        <select className='form-select' {...register("gender")} value={user.gender} name='gender' onChange={updatefield}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" {...register("pass", { required: true, minLength: 5, maxLength: 10 })} value={user.pass} name='pass' onInput={updatefield} />
                                        {errors.pass?.type === "required" && <p className='text-danger'>password is required</p>}
                                        {errors.pass?.type === "minLength" && <p className='text-warning'>minimum 5 char required</p>}
                                        {errors.pass?.type === "maxLength" && <p className='text-danger'>password too much</p>}

                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div class="mb-3">

                                        <input type="submit" class="btn btn-success" value="update now" />

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

export default Employeeeditpage