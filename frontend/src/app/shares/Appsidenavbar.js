import React from 'react'
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';


function Appsidenavbar() {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
            <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-4">Sidebar</span> </Link> <hr />
            <ul class="nav nav-pills flex-column mb-auto mysidebar">
                <li class="nav-item"><Link to="dashboard" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Dashboard</Link> </li>
               <li class="nav-item"><Link to="employeelist" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Employee</Link> </li>
               <li class="nav-item"><Link to="about" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>About</Link> </li>
               <li class="nav-item"><Link to="contact" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Contact</Link> </li>
               <li class="nav-item"><Link to="service" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Service</Link> </li>
               <li class="nav-item"><Link to="mygraph" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Chart</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li><li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               <li class="nav-item"><Link to="#" class="nav-link text-white" aria-current="page"><TiHome style={{fontSize:"27px"}}/>Home</Link> </li>
               

            </ul>
        </div>

    )
}

export default Appsidenavbar