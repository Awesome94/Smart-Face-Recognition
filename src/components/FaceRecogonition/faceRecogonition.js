import React from 'react'

const FaceRecogonition = ({imageUrl}) => {
  return (
    <div className='center ma'>
    <div className = 'center absolute mt2'>
    <img alt='sample img' src = {imageUrl} width='500px' height='auto' />
    </div>
    </div>
  )
}
export default FaceRecogonition;
