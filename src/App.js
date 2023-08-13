// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Route, Link} from 'react-router-dom'

import Signin from './pages/signin';
import Patient from './pages/patient';
import Entry from './pages/entry';
import Success from './pages/success';
import DoctorView from './pages/doctorview';

function App() {

  return(
    <div>
      <BrowserRouter>
      <Routes>

      <Route exact path='/' Component={Signin} />
      <Route exact path='/patientlogin' Component={Patient} />
      <Route exact path='/addpatient' Component={Entry} />
      <Route exact path='/doctorview' Component={DoctorView} />
      <Route exact path='/success' Component={Success} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
