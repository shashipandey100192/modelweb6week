import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Employeepage() {
    const [user,updateuser]=useState([]);

const getallusers = async()=>{
    await axios.get("http://localhost:7800/allusers").then((d)=>{
        console.log(d.data.alluser);
        updateuser(d.data.alluser);
    })
}

useEffect(()=>{
    getallusers();
},[]);


const userdelete =async (id)=>{
    await axios.delete(`http://localhost:7800/userdelete/${id}`).then((d)=>{
        console.log(d);
    });
     getallusers();
}


    return (

        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='h4'>List of Employee:</p>
                </div>
                <div className='col-12'>
                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">EmpNo</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Password</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        {user.map((u)=>{
                            return(
                                 <tr>
                                <th scope="row">{u._id}</th>
                                <td>{u.fullname}</td>
                                <td>{u.email}</td>
                                <td>{u.gender}</td>
                                <td>{u.pass}</td>
                                <td>{u.dob}</td>
                                <td>
                                    <Link to={`singleuserdata/`+u._id} className='btn btn-info btn-sm ms-2'>View</Link>
                                    <Link to={`editpage/`+u._id} className='btn btn-warning btn-sm ms-2'>Edit</Link>
                                    <button type='button' className='btn btn-danger btn-sm ms-2' onClick={()=>userdelete(u._id)}>Del</button>
                                </td>
                            </tr>
                            )
                        })}

                           
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Employeepage