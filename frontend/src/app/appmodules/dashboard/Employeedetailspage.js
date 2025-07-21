import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



function Employeedetailspage() {
    const {id} = useParams();

     const [user,updateuser]=useState({});

const getsingleuserdata = async()=>{
    await axios.get(`http://localhost:7800/singleuser/${id}`).then((d)=>{
        console.log(d.data.single);
        updateuser(d.data.single);
    })
}

useEffect(()=>{
    getsingleuserdata();
},[]);


    return (
    <div className='border p-5 bg-warning text-whie'>
        <h2>Employeedetailspage</h2>
        <h3>User Id:{user._id}</h3>
        <h3>full Name: {user.fullname}</h3>
        <h3>Gender: {user.gender}</h3>
        <h3>DOB: {user.dob}</h3>
        <h3></h3>
         </div>
  )
}

export default Employeedetailspage