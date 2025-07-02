import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container border'>
      <div className='row'>
        <div className='col-12 bg-danger'>
          <h1>this is header file</h1>
        </div>
      </div>
    </div>
 
  </React.StrictMode>
);

