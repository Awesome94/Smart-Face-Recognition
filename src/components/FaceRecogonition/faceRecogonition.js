import React from 'react'

const FaceRecogonition = ({imageUrl}) => {
  return (
    <div className = 'pa5 center'>
    <img alt='sample img' src = {imageUrl} />
    </div>
  )
}
export default FaceRecogonition;
