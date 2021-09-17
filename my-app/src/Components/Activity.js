import './Activity.css'
import {useRef} from 'react'
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AcctList2 from './AcctList2';



function Accounts() {
    const selectAccount = useRef()
    const withdrawAmnt = useRef()
    const depositAmnt = useRef()
    const onlineReciept = useRef()
    const transferAmnt = useRef()
    const accountFrom = useRef()
    const accountTo = useRef()
    const Jerick = () => {
        transferAmnt.current.disabled = true;
        accountFrom.current.disabled = true;
        accountTo.current.disabled = true;
    }
    const Allen = () => {
        selectAccount.current.disabled = true;
        withdrawAmnt.current.disabled = true;
        depositAmnt.current.disabled = true;
        onlineReciept.current.disabled = true;
    }
    


    
    return(
        <div className="Activity">
            <form action="">    
                {/* <label>Select Account </label>
                <input type="text" required onBlur={Jerick} ref={selectAccount}/>
                <label>Select Ammount To Withdraw</label>
                <input type="text" onBlur={Jerick} ref={withdrawAmnt}/>
                <label>Select Ammount To Deposit</label> */}
                <Withdraw/>
                {/* <input type="text" onBlur={Jerick} ref={depositAmnt}/> */}
                <Deposit/>
                
                <div className="transferFunds">
                <h2>Transfer Funds:</h2>
                <label>Amount To Transfer:</label>
                    <input type="text" ref={transferAmnt} onBlur={Allen}/>
                <label>Account Number From:</label>
                    <input type="text" ref={transferAmnt} onBlur={Allen}/>
                <label>Account Number To:</label>
                    <input type="text" ref={transferAmnt} onBlur={Allen}/>
                <button type="submit"></button>
                </div>
            </form>
            <h2 className="clients">Client List</h2>
            <AcctList2/>  
        </div>
    )
}

export default Accounts;