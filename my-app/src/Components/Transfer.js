import React, { useState } from 'react'

const storedClientAccounts = 'client';

const Transfer = () => {
    
    const [client, setClient] = useState ([])
    const [account, setAccount] = useState ('')
    const [accountNum, setAccountNum] = useState ('')
    const [accountNum1, setAccountNum1] = useState ('')
    const [accountNum2, setAccountNum2] = useState ('')
    const [balance, setBalance] = useState('')
    const [inputTransferMoney, setInputTransferMoney] = useState('')

    var acct1;
    var acct2;

    const handleTransfer = () => {

        let clientDetails = JSON.parse(localStorage.getItem(storedClientAccounts));

        for (let i = 0; i < clientDetails.length; i++) {
             if (clientDetails[i].AccountNumber === accountNum1) {
                clientDetails[i].Balance = clientDetails[i].Balance + (-inputTransferMoney)
             } else if (clientDetails[i].AccountNumber === accountNum2) {
                clientDetails[i].Balance = clientDetails[i].Balance - (-inputTransferMoney)
            }
        }

        localStorage.setItem('client', JSON.stringify(clientDetails))
    }
    
    return (
        <div>
                <label> Account Number From: </label>
                    <input type='number' value={acct1} onChange={(e) => setAccountNum1(e.target.value)}/> <br/>
                <label> Account Number To: </label>
                    <input tyspe='number' value={acct2} onChange={(e) => setAccountNum2(e.target.value)}/> <br/>
                <label> Amount: </label>
                    <input type='number' value={inputTransferMoney}  onChange={(e) => setInputTransferMoney(e.target.value)}/>  <br/>
                     <button onClick={handleTransfer}>Submit</button> 
        </div>
        )
    }

export default Transfer;