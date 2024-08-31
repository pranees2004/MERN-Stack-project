import React from 'react'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux'
import {  deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice'
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartProducts = useSelector((state)=>state.cart.cartItems)
    const dispatch=useDispatch();
    const deletecart=(item)=>{
        dispatch(deleteFromCart(item));
      }
      const incrementCart=(id,quantity)=>{
        if(quantity<10){
        dispatch(updateQuantity({id,quantity:quantity+1}))
        }
      };
      const decrementCart =  (id,quantity)=>{
        if(quantity>1){
          dispatch(updateQuantity({id,quantity:quantity-1}))
        }
      }
      const totalQuantity = cartProducts.reduce((total,item)=>total+item.quantity,0);
      const totalAmount = cartProducts.reduce((total,item)=>total+item.price*item.quantity,0);
      const totalPrice = totalAmount.toFixed(2)
      return (
        <>        
        <section>
    <div className='container ct'>
        {
            
            cartProducts.map((product)=>(
                <div class="card mb-3" key={product._id}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={product.image} class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-name">{product.title}</h5>
                      <p class="card-text">{product.price}</p>
                      <button classname = 'btn btn-dark' onClick={()=>decrementCart(product.id,product.quantity)}>-</button>{product.quantity}<button classname = 'btn btn-dark' onClick = {()=>{incrementCart(product.id,product.quantity)}}>+</button><br></br>
                      <button onClick={()=>deletecart(product)} className='btn btn-dark'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
        <div className = 'card cd'>
          <h3 className = 'card-title'>{totalQuantity} Items in your cart</h3>
          <p className = 'card-title'>Rs:{totalPrice}</p>
          <button className = 'btn btn-dark'>Checkout</button>
        </div>
        </div>
        </section>
        

        
        </>
    
  )
}

export default Cart