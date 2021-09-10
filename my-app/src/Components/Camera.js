/* Navbar and body included here */

import React from 'react'; 
import './Navbar.css'
import camera from '../Images/Camera.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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