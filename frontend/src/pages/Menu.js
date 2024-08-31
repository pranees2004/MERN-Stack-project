import React, { useEffect, useState } from 'react'
import './Menu.css'
import menulogo from '../images/menulogo.png'
import Product from '../product/Product'
import { useDispatch, useSelector } from 'react-redux'
import {  addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const MenuPage = () => {
  const cartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch();
  const addCart=(item)=>{
    dispatch(addToCart(item));
  };
  const deletecart=(item)=>{
    dispatch(deleteFromCart(item));
  }
  const [chicken, setChicken] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7777/allproducts")
    .then((res)=>res.json())
    .then((data)=>{
      if(Array.isArray(data)){
        setChicken(data);
      }
      })
  });

  
  
  return (
  

    <div>
      <section className='part1'>
      <div className='menulogo'>
      <img src={menulogo}/></div>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card-title'>
            
             
              <h2>KFC MENU</h2>
              <ul>
                <li>
                WEDNESDAY SPECIALS
                </li>
                <li>
                  MATCH DAY COMBOS
                </li>
                <li>
                  VALUE LUNCH SPECIALS
                </li>
                <li>
                  BOX MEALS
                </li>
                <li>
                  BURGERS
                </li>
                <li>
                  CHICKEN BUCKETS
                </li>
                <li>product
                  RICE BOWLZ
                </li>
                <li>
                  VALUE SNACKERS
                </li>
                <li>
                  CHICKEN ROLLS
                </li>
                <li>
                  SNACKS
                </li>
              </ul>
            </div>
          </div>


        <div className='part1 col-lg-8'>
            <div className='card'>
            <div className='card-title'>
              MENU LIST
            </div>
          </div>
          <div className='row'>
            {chicken.map((item) => (
            <div className=' pro col-lg-6'>
              <div className='card' key={item._id}>
                 <img src={item.image} alt=''/>
                 <p>{item.title}</p>
                <p>₹{item.price}</p>
               <p>{item.ds}</p>
               {cartProducts.find(items=>items._id===item._id)?
               <button className='btn btn-dark' onClick={()=>deletecart(item)}>Remove from Cart</button>:
               <button className='btn btn-danger' onClick={()=>addCart(item)}>Add to cart</button>
                
               }
              </div>
            </div>
            ))}
            {/* <div className='col-lg-6'>
              <div className='card'>
              <img src={cart2} alt='/'/> Wednesday Specials 15 pc Bucket
              <p>₹399.05</p><p>
Flat 59% off on 6 Strips, 6 Wings and 3 peri peri Leg piece 578 Kcal per serving
</p>
              <button className='btn btn-danger'>Add to cart</button>

                  </div>
            </div>
            <div className='row mt-5'>
              </div>
            <div className='col-lg-6'>
              <div className='card'>
              <img src={cart3} alt='/'/> Wednesday Chicken Strips Bucket
              <p>₹369.00</p><p>
Flat 55% off on 12 pc Peri Peri chicken strips & 4 delicious dips (20gm each)
</p>
              <button className='btn btn-danger'>Add to cart</button>

                  </div>
                  </div>
                  <div className='col-lg-6'>
              <div className='card'>
              <img src={cart4} alt='/'/> Wednesday Chicken Bucket
              <p>₹719.05</p><p>
                
           
           
              Save 38%. 10 pcs of Hot & Crispy Chicken. 794 Kcal per serving</p>
              <button className='btn btn-danger'>Add to cart</button>

                  </div>
                  </div> */}
            
          </div>
        </div> 
        </div>
        </div>       

        </section>
         
    </div>
  )
}

export default MenuPage