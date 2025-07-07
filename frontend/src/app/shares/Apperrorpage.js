import React from 'react'
import { Link } from 'react-router-dom'

function Apperrorpage() {
  return (
    <div className='container-fluid bg-danger' style={{height:'100vh'}}>
        <div className='row'>
            <div className='col-12 text-center text-white'>
                <h1 style={{fontSize:150}}>404</h1>
                <p className='h3'>Page Not Found</p>
                <Link to="/userportal" className='btn btn-success'>back to login </Link>
            </div>
        </div>
    </div>
  )
}

export default Apperrorpage