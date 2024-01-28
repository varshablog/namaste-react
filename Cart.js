import { useSelector } from "react-redux";
import MenuDetail from "./MenuDetail";
const Cart=()=>{
    const cartItems=useSelector((store) => store.cart.items)
    // console.log(cartItems);
    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.map((restroCart)=>
                    <MenuDetail MenuInfo={restroCart}/>
                )
                }
            </div>
        </div>
    )
    
}
export default Cart;