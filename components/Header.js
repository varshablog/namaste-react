import { LOGO } from "../utils/constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    let [btnName, setbtnName] = useState("Login");
    let onlineStatus=useOnlineStatus();
    
    const {loggedInUser}=useContext(UserContext)

    const cartItems=useSelector((store)=>
        store.cart.items
    )

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO} alt="not dispaly" />
            </div>
            <ul className="navItems">
                <li> <Link to="/">Home</Link> </li>
                <li>
                    OnlineStatus:{onlineStatus ? " Online":" Offline"}
                </li>
                <li> <Link to="/about">About us</Link> </li>
                <li> <Link to="/contact">Contact us</Link></li>
                <li> <Link to="/cart"> Cart
                    <span class="item-count">{cartItems.length}</span>
                    </Link>
                </li>
                <li><button onClick={() => {
                    (btnName == "Login" ? setbtnName("Logout") : 
                    setbtnName("Login"))
                }}>{btnName}</button></li>
                <li>{loggedInUser}</li>

            </ul>

        </div>

    )
}
export default Header;