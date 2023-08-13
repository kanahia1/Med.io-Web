import React from 'react'
import Navbar from '../components/navbar'
import './entry.css'
import icon from './icon.svg'



export default function Entry() {
  return (
    <div>
        <Navbar />

    

        <div className='tex'>
            <h1 className='text2'>Add Patient</h1>
        </div>
        <div className='patient'>
        <img src = {icon} className="image" alt="" />
        </div>
        <div className='content1'>
        <input className="form-control form " type="text" value="Name Of Patient" aria-label="readonly input example" readonly></input>
        </div>


        <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker content6" inline="true">
            {/* <label for="example">Date of Birth</label> */}
            <input placeholder="Select date" type="date" name = "example" value="Date Of Birth" id="example" className="form-control" />
            <i class="fas fa-calendar input-prefix"></i>

        </div>
        
        <div className='content-wrapper1 content7'>
        <select class="form-select end" aria-label="Default select example">
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
        </select>
        </div>
        <div className='content-wrapper content2'>

        <input className="form-control " type="text" value="Phone Number" aria-label="readonly input example" readonly></input>
        </div>
        <div className='content-container content3'>

        <input className="form-control " type="text" value="Feets" aria-label="readonly input example" readonly></input>
        </div>
        <div className='content frame content4'>

        <input className="form-control" type="text" value="Inchs" aria-label="readonly input example" readonly></input>
       </div>
       <div className='group-div content4'>

        <input className="form-control" type="text" value="Weight" aria-label="readonly input example" readonly></input>
       </div>



        
    
       <div>

         <h1 className='addn'>Nominee</h1>
       </div>

       <div>
       <form class="row g-3 nominee">
  
  <div className="col-auto">
    <label for="inputPassword2" class="visually-hidden">Name</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="" />
  </div>
  <div class="col-auto">
    <button type="submit" className="btn btn-primary mb-3 ch">Add</button>
  </div>
</form>
       </div>

       <div className='patient3'>
       <button type="button" className="btn btn-primary">Add Patient</button>
       </div>
    </div>
  )
}
