import React, { useState } from 'react'

const storedClientAccounts = 'client';

const Withdraw = () => {
    
    const [client, setClient] = useState ([])
    const [account, setAccount] = useState ('')
    const [accountNum, setAccountNum] = useState ('')
    const [balance, setBalance] = useState('')
 
    var inputWithdrawalAmt;
    var inputAccountNum;

    const handleWithdraw = () => {

        let clientDetails = JSON.parse(localStorage.getItem(storedClientAccounts));
        
        for (let i = 0; i < clientDetails.length; i++) {
             if (clientDetails[i].AccountNumber === accountNum) {
                clientDetails[i].Balance = clientDetails[i].Balance - balance
             }
        }
        localStorage.setItem('client', JSON.stringify(clientDetails))
    }
    
    return (
            <div className="withdraw">
                <h2>Withdraw:</h2>
                <label> Account Number: </label>
                    <input type='number' value={inputAccountNum} onChange={(e) => setAccountNum(e.target.value)}/> 
                <label> Amount: </label>
                    <input type='number' value={inputWithdrawalAmt}  onChange={(e) => setBalance(e.target.value)}/>  
                    <label>Transaction Reciept?</label>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                     <button onClick={handleWithdraw} className="button"></button> 
            </div>
        )
    }

export default Withdraw;