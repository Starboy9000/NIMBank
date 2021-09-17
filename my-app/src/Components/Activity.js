import './Activity.css'
import {useRef} from 'react'


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
            <h2>Withdraw Or Deposit</h2>
            <form action="">    
                <label>Select Account </label>
                <input type="text" required onBlur={Jerick} ref={selectAccount}/>
                <label>Select Ammount To Withdraw</label>
                <input type="text" onBlur={Jerick} ref={withdrawAmnt}/>
                <label>Select Ammount To Deposit</label>
                <input type="text" onBlur={Jerick} ref={depositAmnt}/>
                <label>Would You Like An Online Reciept for your transaction?</label>
                <select ref={onlineReciept}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <h2>Transfer Funds</h2>

                <label>Ammount To Transfer</label>
                <input type="text" ref={transferAmnt} onBlur={Allen}/>
                <label>Account Number From</label>
                <select ref={accountFrom} onBlur={Allen}>
                    <option>xxx-x1x-xxx</option>
                    <option>xxx-xxx-x2x</option>
                </select>
                <label>Account Number To</label>
                <select ref={accountTo } onBlur={Allen}>
                    <option>x2x-xxx-xxx</option>
                    <option>xxx-x1x-xxx</option>
                </select>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default Accounts;