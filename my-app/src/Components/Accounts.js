import { TableContainer } from "@material-ui/core";
import AcctList from "./AcctList"; 
import CreateAcct from "./CreateAcct";
import "./Activity.css"

function Activity(){
    return (
        <div className="test">
            <CreateAcct/>
            <AcctList/>  
        </div>
    )
}

export default Activity;