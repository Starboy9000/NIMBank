/* Navbar and body included here */

import React from 'react'; 
import './Navbar.css'
import camera from '../Images/Camera.png'

const Camera = () => {
  return (
    <div>
    
        <div>
            <img src={camera} alt="camera" className="camera"></img>
        </div>

    </div>
  )
}

export default Camera;