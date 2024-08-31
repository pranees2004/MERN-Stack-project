import React from 'react'
import './admin.css'
import {toast} from 'react-toastify'

const Upload = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const ds = form.ds.value;
        const price = form.price.value;
        const quantity = 1;
        if(image === '' || title === '' || ds === '' || price === ''){
            toast.error('Fill all the fields');
        }
        const prdObj = {
            image,title,ds,price,quantity
        };console.log(prdObj);
        fetch("http://localhost:7777/product",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prdObj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success('Product added successfully')
            form.reset();
            window.location.href = '/admin';
        });
    }
    return (
        <div className = 'up'>
            <div className='card up1'>
            <h3>Upload products</h3>
            <form onSubmit={handleSubmit}>
                <lable value = "image">Image</lable><br/>
                <input type = "text" name = "image" id = 'image'/><br/>
                <lable value = "title">Title</lable><br/>
                <input type = "text" name = "title" id ="title"/><br/>
                <lable value = "ds">Description</lable><br/>
                <input type = "text" name = "ds" id = 'ds'/><br/>
                <lable value = "price">Price</lable><br/>
                <input type = "text" name = "price" id = 'price'/><br/><br/>
                <button type = "submit" className = 'btn btn-dark'>Upload</button>

            </form>
        </div>
        </div>

    
    )
}
export default Upload