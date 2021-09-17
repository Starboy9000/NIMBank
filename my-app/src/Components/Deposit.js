import React from 'react'
import React, { useState } from 'react';

export const Deposit = () => {
    const [balance, setBalance] = useState ('')
    const [amount, setAmount] = useState ('')

    
    const deposit = (balance, amount, accountnumber, setaccountnumber, setbalance) => {
        let totalbalance = parseInt(balance) + parseInt(amount)
        let container = []
        let userData = JSON.parse(localStorage.getItem('userData'))
        for (let i = 0; i < userData.length; i++) {
             container.push(userData[i])
        }
        for (let i = 0; i < container.length; i++) {
             if (container[i].accountID === accountnumber) {
                  container[i].initialbalance = totalbalance
                  console.log('new balance is ' + totalbalance)
                  const { transactionID, date, type, balance } = transaction(parseInt(amount), totalbalance, container[i], 'deposit')
                  emailFormat(createFullName(container[i].firstname, container[i].middlename, container[i].lastname), container[i].email, transactionID, container[i].accountID, balance, amount, type, date)
   
   
             }
        }
   
        localStorage.setItem('userData', JSON.stringify(container))
        setaccountnumber('')
        setbalance(0)
    }
    return (
        
    )
}
