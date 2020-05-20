import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default (props) => {
    const [oneProduct, setOneProduct] = useState({});
    const{id, product, setProduct, removeFromDom} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/getOne/'+id)
            .then(res => setOneProduct({
                ...res.data.product
            }))
    }, []);

    const updatePage = (e)=> {
        e.preventDefault();
        navigate('/update/'+id)
    };

    
    return (
        <div className='container' >
            <h1 style={{display:'inline-block', width: '80%'}}> Product Details </h1>
            <div style={{ verticalAlign:'bottom' ,display:'inline-block'}}>
                <Link to='/'>Go Home</Link>
            </div>
            <hr/>
            <h4> <strong>Product Name:</strong> {oneProduct.title} </h4>
            <h4> <strong>Current Price:</strong> ${oneProduct.price}</h4>
            <div style={{textAlign:'center', border: '1px dotted black', borderRadius:'10px'}}>
                <h4> <strong>Description:</strong></h4>
                <h4> {oneProduct.description} </h4>
            </div>
            <button className='btn btn-primary' style={{marginTop:'1%', borderRadius:'5px', marginRight:'1%'}} onClick={updatePage}>Update Product</button>
            <button className='btn btn-danger' style={{marginTop:'1%', borderRadius:'5px'}}>Delete Product</button>
        </div>
    )
};



