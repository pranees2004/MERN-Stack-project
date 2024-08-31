import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';

const Update = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7777/allproducts')
            .then((res) => res.json())
            .then((data) => setProductData(data));
    }, []);

    const deleteProduct = (id) => {
        fetch(`http://localhost:7777/product/${id}`, { 
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Product deleted successfully"); 
                setProductData((prevProductData) =>
                    prevProductData.filter((item) => item._id !== id)
                );
            });
    };

    return (
        <div>
            <h4>Updated Products</h4>
            {productData.map((item) => (
                <div className="card mb-3" key={item._id}>
                    <div className="row g-0">
                        <div className="col-md-4 upim"> {}
                            <img src={item.image} className="img-fluid rounded-start" alt={item.title} /> {/* Added alt text */}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.ds}</p>
                                <p className="card-text">Rs: {item.price}</p>
                                <Link to={`/edit/${item._id}`} className="btn btn-warning">Edit</Link> {/* Fixed template literal */}
                                <button className='btn btn-danger' onClick={() => deleteProduct(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Update;
