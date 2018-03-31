import React from 'react'
import Tilt from 'react-tilt'
import exercise from "./exercise.png";
import './logo.css'

const Logo = () => {
  return (
    <div className='ma4 mto'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
    <div className="Tilt-inner">
    <img style={{paddingTop: '70px', width:' 50%'}}alt='logo' src={exercise}/>
    </div>
    </Tilt>
    </div>
  )
}
export default Logo;