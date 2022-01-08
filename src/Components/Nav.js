import logo from '../Images/NIM logo.png'
import './Navbar.css'
import { Link, withRouter } from 'react-router-dom'



const Navbar = () => {
    return (

<div className="Navbar">
        <div className="leftSide">
        <input type="text" placeholder="Account Name Or Number" className="searchBar"/>
         <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="rightSide">
            <div className="links">
                <nav>
                    <ul>
                    <Link className="nav-link" to="/">
                    Home
                    </Link>
                    <Link className="nav-link" to="/Accounts">
                    Activity
                    </Link>
                     <Link className="nav-link" to="/Activity">
                    Accounts
                    </Link>
                    </ul>
                </nav>
            </div> 
        </div>
    </div>

    )}

export default withRouter(Navbar);
