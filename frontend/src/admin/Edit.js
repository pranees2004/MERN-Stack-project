import React, { useEffect, useState } from "react";
import './admin.css'
import {toast} from 'react-toastify';
import { useParams } from "react-router-dom";
const Edit =() =>{
    const{id}= useParams();
    const [prdData,setPrdData]=useState({
        image:'',
        title:'',
        ds:'',
        price:''
    });
    useEffect(()=>{
        fetch(`http://localhost:7777/product/${id}`)
        .then((res)=>res.json())
        .then((data)=> setPrdData(data))

    });
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const ds = form.ds.value;
        const price = form.price.value;
        
        const prodObj={
            image,title,ds,price
        };
        console.log(prodObj);
        fetch(`http://localhost:7777/product/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(prodObj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("product uploaded successfully");
            window.location.href = '/admin';

        });
    }
    return(
        <div className="up">
            <div className="card up1">
                <h3>Update products</h3>
                <form onSubmit={handleUpdate}>
                    <lable value="image"></lable><br/>
                    <input type="text" name="image" id='image' defaultValue={prdData.image}/><br/>
                    <lable value="title">Title</lable><br/>
                    <input type="text" name="title" id='title' defaultValue={prdData.title}/><br/>
                    <lable value="ds">Description</lable><br/>
                    <input type="text" name="ds" id='ds' defaultValue={prdData.ds}/><br/>
                    <lable value="price">Price</lable><br/>
                    <input type="text" name="price" id='price' defaultValue={prdData.price}/><br/><br/>
                    <button type="submit" className='btn btn-dark'>Update</button>
                </form>
            </div>
        </div>
    )   
}
export default Edit