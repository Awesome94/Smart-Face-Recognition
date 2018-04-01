import React from 'react'

const FaceRecogonition = ({imageUrl}) => {
  return (
    <div className = 'pa5 center'>
    <img style={{width: '25%', height:'25%'}}alt='sample img' src = {imageUrl} />
    </div>
  )
}
export default FaceRecogonition;
