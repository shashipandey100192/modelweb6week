import React from 'react'
import { Link } from 'react-router-dom';
import { FcManager } from "react-icons/fc";

function Welcomeapp() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1>Welcome to Application</h1>
                <hr/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3 text-center'>
                <Link to="userportal" className='border myapp bg-info shadow'>
                    <FcManager/>
                    <p>User</p>
                </Link>
            </div>
            <div className='col-sm-3 text-center'>
                <Link to="userportal" className='border myapp bg-info shadow'>
                    <FcManager/>
                    <p>Recharge</p>
                </Link>
            </div>
            <div className='col-sm-3 text-center'>
                <Link to="userportal" className='border myapp bg-info shadow'>
                    <FcManager/>
                    <p>Sales</p>
                </Link>
            </div>
            <div className='col-sm-3 text-center'>
                <Link to="userportal" className='border myapp bg-info shadow'>
                    <FcManager/>
                    <p>Admin</p>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Welcomeapp