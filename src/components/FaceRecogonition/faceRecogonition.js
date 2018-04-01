import React from 'react';
import './faceRecogonition.css';

const FaceRecogonition = ({imageUrl, box}) => {
  return (
    <div className='center ma'>
    <div className = 'center absolute mt2'>
    <img alt='' id='inputImage' src = {imageUrl} width='500px' height='25%' />
    <div className = 'bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol }}>
    </div>
    </div>
    </div>
  )
}
export default FaceRecogonition;
