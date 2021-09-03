import React from 'react'; 
import './Navbar.css'
import logo from '../Images/NIM logo.png'

const Navbar = () => {
  return (
    <div>
    <div className="Navbar">
        <div className="leftSide">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="rightSide">
            <div className="links">
                <a href="#/home">Home</a>
                <a href="#/activity">Activity</a>
                <a href="#/accounts">Accounts</a>
                <a href="aboutus">About Us</a>
            </div> 
        </div>
    </div>
        <div className="body">
               
        </div>

    </div>
  )
}

export default Navbar