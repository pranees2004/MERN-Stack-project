import React from 'react';
import kfc from '../images/kfc.png';
import './Navbar.css';
import { CgProfile } from 'react-icons/cg';
import { FaCartShopping, FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
<Link to='/'><img src={kfc}  alt="KFC Logo" /></Link>
const Navbar = () => {

  const cartProducts = useSelector((state)=>state.cart.cartItems)

  const totalAmount = cartProducts.reduce((total,item)=>total+item.price*item.quantity,0);
  const totalPrice = totalAmount.toFixed(2)
  
  return (
    <div>Navbar
    Navbar
    Navbar
      <nav className="nav">
      <div className="nav-left">
     
        <Link to='/'><img src={kfc}  alt="KFC Logo" /></Link>
        <ul className="nav-menu">
          <li>
            <Link to ="/menu" className="menu">
              MENU
            </Link>
          </li>
          <li>
            <a href="/deals" className="deals">
              DEALS
            </a>
            </li>
            <li>
              <a href = "/Admin" className = "admin">
              ADMIN
              </a>
            </li>
          
        </ul>
      </div>
      <div className="nav-right">
    
      
        <div href="/profile" className="profile">
        <Link to = "/Login"className="cart1"><CgProfile size={35}/>
       Sign In
        </Link>
        </div>
          <div className="cart-link">{totalPrice}<FaIndianRupeeSign size={25} /></div>
      
        <li><Link to="/cart" className="cart-link"><FaCartShopping size={25} /></Link></li>
      
      </div>
    </nav>
    </div>
  )
}

export default Navbar