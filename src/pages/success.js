import React from 'react'
import Navbar from '../components/navbar'
import './success.css'


export default function Success() {
  return (
    <div>
        <Navbar />

        <div className='tex tex1'>
            <h1 className='text2 col'>Patient added successfully</h1>
        </div>
        <div className='tex'>
            <h1 className='te'>Patient address - 0x6132468565131321</h1>
        </div>

    </div>
  )
}
