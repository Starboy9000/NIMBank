import { TableContainer } from "@material-ui/core";
import AcctList from "./AcctList"; 
import CreateAcct from "./CreateAcct";

function Activity(){
    return (
        <div>
            <CreateAcct/>
            <AcctList/>  
        </div>
    )
}

export default Activity;