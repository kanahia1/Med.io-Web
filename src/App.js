// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Route, Link} from 'react-router-dom'

import Signin from './pages/signin';

function App() {

  return(
    <div>
      <BrowserRouter>
      <Routes>

      <Route exact path='/' Component={Signin} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
