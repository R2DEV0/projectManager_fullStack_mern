import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



export default (props)=> {
    const {title, setTitle, price, setPrice, description, setDesc} = props;


const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api', {
        title,
        price,
        description
    })
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
};

    return(
        <div className='container' style={{textAlign:'center'}}>
            <h2 style={{ margin: '20px', fontFamily: "sans-serif", fontWeight:'bold' }}> Product Manager </h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor='title' style={{marginRight:'10px', fontWeight:'bold', fontFamily: "sans-serif"}}> Title: </label>
                    <input type='text' onChange={(e)=> setTitle(e.target.value)} style={{ borderRadius: '5px' }}/>
                </p>
                <p>
                    <label htmlFor='price' style={{marginRight:'4px', fontWeight:'bold', fontFamily: "sans-serif"}}> Price: </label>
                    $ <input type='decimal' onChange={(e)=> setPrice(e.target.value)} placeholder=' 0.00' style={{ borderRadius: '5px' }}/>
                </p>
                <p>
                    <label htmlFor='desc' style={{marginRight:'10px', fontWeight:'bold', fontFamily: "sans-serif"}}> Description: </label>
                    <input type='text' onChange={(e)=> setDesc(e.target.value)} style={{ borderRadius: '5px' }}/>
                </p>
                <input className='btn btn-primary btn-sm' type='submit' value='Add Product' style={{ borderRadius:'3px', marginRight:'10px' }}/>
                <input className='btn btn-secondary btn-sm' type='reset' value='Reset' style={{ borderRadius:'3px' }}/>
            </form>
        </div>
    )
}