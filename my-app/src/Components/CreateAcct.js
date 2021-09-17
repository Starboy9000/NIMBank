import React, { useState } from 'react';
/* import from '@material-ui/core' */

function CreateAcct() {

    const [client, setClientAcct] = useState([])
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [initialBal, setBalance] = useState('')

    

    const handleCreate = (e) => {
       
        e.preventDefault();

        const newAcctDetails = {    
            Name : name,
            Email : email,
            Password : password,
            Balance : initialBal
        }
    

        if (localStorage.getItem('client')) {
            let container = []
            for (let i = 0; i < JSON.parse(localStorage.getItem('client')).length; i++) {
                container.push(JSON.parse(localStorage.getItem('client'))[i])
            } 

            container.push(newAcctDetails)
            
            localStorage.setItem('client',JSON.stringify(container))
        } else {
           let container = []

           container.push(newAcctDetails)
            
           localStorage.setItem('client',JSON.stringify(container))
        }

        console.log()

    }
    
        return (
            <div className="App">
                <label> Name: </label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} /> <br/>
                <label> Email: </label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />  <br/>
                <label> Password: </label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />  <br/>
                <label> Initial Balance: </label>
                    <input type='number' value={initialBal} onChange={e => setBalance(e.target.value)} />  <br/>
                <button onClick={handleCreate}>Submit</button>
                <div> Client list:  {client.current} </div>
                </div>
        )
    };

export default CreateAcct;