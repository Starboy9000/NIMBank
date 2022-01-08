import React, { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'



const AcctList = () => {

    const [accountTable, setAccountTable] = useState(JSON.parse(localStorage.getItem('client')))

    useEffect (() => {
        setInterval(() => {
        setAccountTable(JSON.parse(localStorage.getItem('client')))
        }, 1000)
    })
    return (
        <TableContainer className="clientList">
            <Table size={'small'}>
                <TableHead>
                    <TableCell> Account Number </TableCell> 
                    <TableCell> Account Name </TableCell> 
                    <TableCell> Email </TableCell>
                    <TableCell> Password </TableCell>
                    <TableCell> Balance </TableCell>
                </TableHead>
                <TableBody>
                
                    {accountTable && accountTable.map(row => { 
                        return (
                        <TableRow>
                            <TableCell>{row.AccountNumber}</TableCell>
                            <TableCell>{row.Name}</TableCell>
                            <TableCell>{row.Email}</TableCell>
                            <TableCell>{row.Password}</TableCell>
                            <TableCell>{row.Balance}</TableCell>
                        </TableRow>
                        
                        )
                        
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        
    )

    
}

export default AcctList
