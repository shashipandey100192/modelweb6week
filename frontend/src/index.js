import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./app/css/global.css";
import Welcomeapp from './app/Welcomeapp';
import Loginpage from './app/appmodules/auth/Loginpage';
import Registorpage from './app/appmodules/auth/Registorpage';
import Mainpage from './app/appmodules/dashboard/Mainpage';
import Landingpage from './app/appmodules/dashboard/Landingpage';
import Homepage from './app/appmodules/dashboard/Homepage';
import Employeepage from './app/appmodules/dashboard/Employeepage';
import Apperrorpage from './app/shares/Apperrorpage';
import Aboutpage from './app/appmodules/dashboard/Aboutpage';
import Employeedetailspage from './app/appmodules/dashboard/Employeedetailspage';
import Employeeeditpage from './app/appmodules/dashboard/Employeeeditpage';
import Graphpage from './app/appmodules/dashboard/Graphpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp/>}></Route>
        <Route path='userportal' element={<Loginpage/>}></Route>
        <Route path='userportal/registor' element={<Registorpage/>}></Route>
        <Route path='dashboard' element={<Mainpage/>}>
          <Route path='' element={<Landingpage/>}></Route>
          <Route path='dashboard' element={<Landingpage/>}></Route>
          <Route path='employeelist' element={<Employeepage/>}></Route>
          <Route path='employeelist/singleuserdata/:id' element={<Employeedetailspage/>}></Route>
          <Route path='employeelist/editpage/:id' element={<Employeeeditpage/>}></Route>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path='mygraph' element={<Graphpage/>}></Route>
          <Route path='*' element={<Apperrorpage/>}></Route>

        </Route>

        <Route path='*' element={<Apperrorpage/>}></Route>

      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

