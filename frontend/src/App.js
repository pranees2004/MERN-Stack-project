import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import MenuPage from './pages/Menu';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Admin from './admin/Admin';
import Upload from './admin/Upload';
import Edit from './admin/Edit';



function App(){
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Menu' element={<MenuPage/>}/>
    <Route path='/Deals' element={<Deals/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/edit/:id' element={<Edit/>} loader={({params})=>fetch(`http://localhost:7777/product/${params.id}`)}/> 
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
  )
}
export default App;