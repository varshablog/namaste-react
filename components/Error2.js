import { useRouteError } from "react-router-dom"
//useRouteError provide information about error
const Error=()=>{
    const error= useRouteError();
    return(
        <div>
            <h1>Oops Something Gone Wrong!!!</h1>
            <h3>Please Reload the page</h3>
            
        </div>
    )
}
export default Error;