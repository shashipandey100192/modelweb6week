import React from 'react'
import { Link } from 'react-router-dom';
import { FcManager } from "react-icons/fc";
import { applists } from './controls/Applist';

function Welcomeapp() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Welcome to Application</h1>
                    <hr />
                </div>
            </div>
            <div className='row'>
                {/* <div className='col-sm-3 text-center'>
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
            </div> */}

                {applists.map((apps) => {
                    if(apps.applink==="registor")
                    {
                        return (
                        <div className='col-sm-3 text-center mt-3'>
                            <Link to={"userportal/"+apps.applink} className='border myapp bg-info shadow'>
                                <FcManager />
                                <p>{apps.appname}</p>
                            </Link>
                        </div>
                    )
                    }
                    else
                    {
                        return (
                        <div className='col-sm-3 text-center mt-3'>
                            <Link to={apps.applink} className='border myapp bg-info shadow'>
                                <FcManager />
                                <p>{apps.appname}</p>
                            </Link>
                        </div>
                    )
                    }
                })}

            </div>
        </div>
    )
}

export default Welcomeapp