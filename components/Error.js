import { useRouteError } from "react-router-dom"
//useRouteError provide information about error
const Error=()=>{
    const error= useRouteError();
    return(
        <div>
            <h1>Oops Something Gone Wrong!!!</h1>
            <h2>{error.status}:{error.statusText}</h2>
        </div>
    )
}
export default Error;