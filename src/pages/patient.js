import React from 'react'
import Navbar from '../components/navbar'
import './patient.css'
import add from './add.svg'
import inbox from './Inbox.svg'
import appointment from './appointment.svg'
import history from './history.svg'


async function requestaccount(){
    console.log("Requsting account");
}

export default function Patient() {
  return (
    <div>
        <Navbar />

        <div className='tex'>
            <h1 className='text2'>Access to patient's Profile</h1>
        </div>

    <div className='input'>
            <form className="row g-3">
    
        
    <div className="col-auto inputbox">
        <label for="inputPassword2" className="visually-hidden">Password</label>
        <input type="text" className="form-control" id="inputPassword2" placeholder="Password" />
    </div>
    <div className="col-auto">
        
        <button onClick={requestaccount} type="submit" className="btn btn-primary mb-3">Access</button>
    </div>
    </form>
    </div>

    <div className='text'>
            <h1 className='text2'>More Tools</h1>
        </div>
    <div>

        <img src={add} className='logo' alt="logo" />
        <img src={history} className='logo' alt="logo" />
        <img src={appointment} className='logo' alt="logo" />
        <img src={inbox} className='logo' alt="logo" />
    </div>
    </div>
  )
}
