import React, { useState } from 'react'

const storedClientAccounts = 'client';

const Deposit = () => {

    const [client, setClient] = useState ([])
    const [account, setAccount] = useState ('')
    const [accountNum, setAccountNum] = useState ('')
    const [balance, setBalance] = useState('')
 
    var inputDepositAmt;
    var inputAccountNum;


    const handleDeposit = () => {

        let clientDetails = JSON.parse(localStorage.getItem(storedClientAccounts));
        
        for (let i = 0; i < clientDetails.length; i++) {
             if (clientDetails[i].AccountNumber === accountNum) {
                clientDetails[i].Balance = clientDetails[i].Balance - (-balance)
             }
        }
        localStorage.setItem('client', JSON.stringify(clientDetails))
    }
    

    return (
        <div>

                <label> Account Number: </label>
                    <input type='number' value={inputAccountNum} onChange={(e) => setAccountNum(e.target.value)}/> <br/>
                <label> Amount: </label>
                    <input type='number' value={inputDepositAmt}  onChange={(e) => setBalance(e.target.value)}/>  <br/>
                     <button onClick={handleDeposit}>Submit</button> 
                
        
        </div>
        )
    }

export default Deposit;