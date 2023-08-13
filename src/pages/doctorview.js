import React from 'react'
import Navbar from '../components/navbar'
import './doctorview.css'
import vector1 from './vector1.svg'
import covid from './covid.svg'
import severe from './severe.svg'
import tough from './tough.svg'
import littlegood from './littlegood.svg'
import littletough from './littletough.svg'
import good from './good.svg'
import checkup from './checkup.svg'
import submit from './submit.svg'

document.body.style = 'background: #F2F5F9;';
// document.body.style = 'font-family: Plus Jakarta Display, sans-serif;';



export default function DoctorView() {
  return (
    <div>
        <Navbar />
        <div className="name">Last Visit</div>
      <div className="name1">Prescribe</div>

      <div class="rectangle-parent">
        <div class="group-child"></div>
        <b class="name2">Preciption</b>
        <b class="name3">Tests</b>
        <div class="group">
          <div class="group-item"></div>
          <div class="group-inner"></div>
          <div class="rectangle-div"></div>
          <div class="group-child1"></div>
          <div class="group-child2"></div>
          <div class="group-child3"></div>
          <div class="group-child4"></div>
          <div class="group-child5"></div>
          <div class="group-child6"></div>
          <div class="group-child7"></div>
          <div class="group-child8"></div>
          <div class="group-child9"></div>
          <div class="group-child10"></div>
          <div class="group-child11"></div>
          <div class="group-child12"></div>
          <div class="group-child13"></div>
          <div class="group-child14"></div>
          <div class="group-child15"></div>
          <div class="group-child16"></div>
          <div class="group-child17"></div>
          <div class="group-child18"></div>
          <div class="group-child19"></div>
          <div class="group-child20"></div>
          <div class="group-child21"></div>
          <div class="group-child22"></div>
          <div class="group-child23"></div>
          <div class="group-child24"></div>
          <div class="group-child25"></div>
          <div class="group-child26"></div>
          <div class="group-child27"></div>
          <div class="group-child28"></div>
          <div class="group-child29"></div>
          <div class="group-child30"></div>
          <div class="group-child31"></div>
          <div class="group-child32"></div>
        </div>
      </div>

      <div class="rectangle-group">
        <div class="group-child33"></div>
        <b class="name4">Preciption</b>
        <b class="name5">Tests</b>
        <div class="group1">
          <div class="group-item"></div>
          <div class="group-inner"></div>
          <div class="rectangle-div"></div>
          <div class="group-child1"></div>
          <div class="group-child2"></div>
          <div class="group-child3"></div>
          <div class="group-child4"></div>
          <div class="group-child5"></div>
          <div class="group-child6"></div>
          <div class="group-child7"></div>
          <div class="group-child8"></div>
          <div class="group-child9"></div>
          <div class="group-child10"></div>
          <div class="group-child11"></div>
          <div class="group-child12"></div>
          <div class="group-child13"></div>
          <div class="group-child14"></div>
          <div class="group-child15"></div>
          <div class="group-child16"></div>
          <div class="group-child17"></div>
          <div class="group-child18"></div>
          <div class="group-child19"></div>
          <div class="group-child20"></div>
          <div class="group-child21"></div>
          <div class="group-child22"></div>
          <div class="group-child23"></div>
          <div class="group-child24"></div>
          <div class="group-child25"></div>
          <div class="group-child26"></div>
          <div class="group-child27"></div>
          <div class="group-child28"></div>
          <div class="group-child29"></div>
          <div class="group-child30"></div>
          <div class="group-child31"></div>
          <div class="group-child32"></div>
        </div>
      <div class="mb-3 check">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
        <div class="pluscircle"></div>
      </div>
      <div class="doctor-view-2-item"></div>
      <div class="doctor-view-2-inner"></div>
      <div class="doctor-view-2-child1"></div>
      <div class="doctor-view-2-child2"></div>
      <b class="name6">Disease</b>
      <b class="name7">Disease</b>
      <div class="rectangle-container">
        <div class="group-child69"></div>
        <div class="ellipse-div"></div>
        <div class="covid-19">
            <img src={covid} alt="" />
        </div>
      </div>
      <div class="group-div">
        <div class="group-child69"></div>
        <div class="ellipse-div"></div>
        <div class="covid-191">
            <img src={covid} alt="" />
        </div>
      </div>
      <div class="rectangle-parent1">
        <div class="group-child69"></div>
        <div class="add">
            <img src={vector1} alt="" />
        </div>
      </div>
      <div class="rectangle-parent2">
        <div class="group-child69"></div>
        <div class="add1">
            <img src={vector1} alt="" />
        </div>
      </div>
      <div class="rectangle-parent3">
        <div class="group-child69"></div>
        <div class="add2">
            <img src={vector1} alt="" />
        </div>
        
      </div>

      <div class="ellipse-parent">
        <div class="severe">
            <img src={severe} alt="" />
        </div>
      </div>
      <div class="ellipse-group">
        <div class="severe">
        <div class="severe">
            <img src={tough} alt="" />
        </div>
        </div>
      </div>
      <div class="ellipse-container">
        <div class="severe">
        <div class="severe">
            <img src={littletough} alt="" />
        </div>
        </div>
      </div>
      <div class="ellipse-parent1">
        <div class="severe">
        <img src={littlegood} alt="" />

        </div>
      </div>
      <div class="ellipse-parent2">
        <div class="severe">
        <img src={good} alt="" />
        </div>
      </div>
      <div class="loremus-ipsumus-d-parent">
        <div class="loremus-ipsumus-d-container">
          <span>Para</span>
          <span class="span">|</span>
          <span class="cetamol">cetamol</span>
        </div>
        <div class="group-child80"></div>
        <div class="group-child80"></div>
        {/* <img class="group-child82" alt="" src="./public/vector-1.svg" />

        <img class="polygon-icon" alt="" src="./public/polygon-1.svg" />

        <img class="group-child83" alt="" src="./public/polygon-2.svg" /> */}
      </div>
      <div class="loremus-ipsumus-d-group">
        <div class="loremus-ipsumus-d">COVID- RTPCR</div>
        <div class="group-child84"></div>
        <img class="group-child85" alt="" src="./public/vector-11.svg" />
      </div>
      <div class="loremus-ipsumus-d-parent1">
        <div class="loremus-ipsumus-d-container1">
          <span>CV</span>
          <span class="span">|</span>
          <span class="cetamol">C</span>
        </div>
        <div class="group-child86"></div>
      </div>
      <div class="rectangle-parent4">
        <div class="group-child87"></div>
        <div class="group-child88"></div>
      </div>
      <div class="rectangle-parent5">
        <div class="group-child87"></div>
        <div class="group-child88"></div>
      </div>
      <div class="button-primary" id="buttonPrimaryContainer">
        <div class="content">
            <img src={submit} alt="" />
          
          
        </div>
      </div>
      <div class="content1">
        <div class="text1">
          <div class="loremus-ipsumus-d1">
            <img src={checkup} alt="" />
          </div>
        </div>
      </div>
<b class="x1">x1</b>
    </div>
        
        
        )
    }
    