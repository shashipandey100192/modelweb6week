import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
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
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-success" value="submit"/>
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