import React, { Fragment } from 'react'
import Appheaderpage from '../../shares/Appheaderpage'
import Appsidenavbar from '../../shares/Appsidenavbar'
import Homepage from './Homepage'
import Appfooterpage from '../../shares/Appfooterpage'
import { Outlet } from 'react-router-dom'

function Mainpage() {
  return (
    <Fragment>
        <Appheaderpage></Appheaderpage>
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-2 border g-0'>
                        <Appsidenavbar></Appsidenavbar>
                </div>
                <div className='col-md-10 g-0'>
                   <Outlet></Outlet>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Appfooterpage></Appfooterpage>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Mainpage