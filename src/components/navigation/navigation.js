import React from 'react'

const Navigation = ({onRouteChange, issignedIn}) => {
  if(issignedIn){
  return (
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
    <p onClick={()=>onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'>Sign out</p>
    </nav>
  );
  } else {
    return(
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
      <p onClick={()=>onRouteChange('Register')} className = 'f3 link dim black underline pa3 pointer'>Register</p>
      <p onClick={()=>onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
      </nav>
    );
  }
}
export default Navigation;