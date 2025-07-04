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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp/>}></Route>
        <Route path='userportal' element={<Loginpage/>}></Route>
        <Route path='userportal/registor' element={<Registorpage/>}></Route>
        <Route path='dashboard' element={<Mainpage/>}></Route>

      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

