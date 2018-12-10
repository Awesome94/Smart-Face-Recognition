import React from 'react'
import Tilt from 'react-tilt'
import sydney from "./Sydney_Church_of_England_Grammar_School.png";
import './logo.css'

const Logo = () => {
  return (
    <div className='ma4 mto' options={{ max : 55 }} style={{ height: 200, width: 200 }} >
    <div className="Tilt-inner">
    <img style={{paddingTop: '70px', width:' 50%'}}alt='logo' src={sydney}/>
    </div>
    </div>
  )
}
export default Logo;
