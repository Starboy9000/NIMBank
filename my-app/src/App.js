import React from 'react'; 
import './App.css';
import Navbar from './Components/Nav';
import Activity from './Components/Activity'
import Accounts from './Components/Accounts'
import Body from './Components/Camera';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './Components/Background';



const App = () => {
  return (
    <Router>
    <div>
    <Navbar/>
    <Background/>
    <Switch> 
    <Route path="/" exact component={Body} />
    <Route path="/Activity" component={Activity}/>
    <Route path="/Accounts" component={Accounts}/>
    </Switch>
    </div>
    </Router>
  )
}

const Home = () => (
  <div>
  </div>
)

export default App
