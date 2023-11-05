import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../../Context/ShopContext';
import "./Navbar.css"
const Navbar = () => {
    const {getTotalCartItems} =useContext(ShopContext);
    const totalCartItems = getTotalCartItems();
    return ( 
        <div className="navbar">
            <div className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'><ShoppingCart size={32}/></Link>
                <div className="nav-cart-count">{totalCartItems}</div>
            </div>
        </div>
     );
}
 
export default Navbar;