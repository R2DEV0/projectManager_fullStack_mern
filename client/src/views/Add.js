import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState('');
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {id} = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then(res=> {
                setProduct(res.data);
                setLoaded(true);
            });
    }, []);


    return (
        <div className='container'>
            <ProductForm title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDesc={setDesc}/>
            <hr/>
            {loaded && <ProductList product={product} id={id} />}
        </div>
    )
};