import React from 'react'
import './imageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className='center'>
    <div className = 'form w-50 center pa4 br3 shadow-5'>
      <input className='f4 pa2 w-70 center' type='text' onChange = {onInputChange}/>
      <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onButtonSubmit}>Detect</button>
      </div>
    </div>
  )
}
export default ImageLinkForm;
