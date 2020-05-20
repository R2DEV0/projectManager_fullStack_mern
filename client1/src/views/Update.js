import React, {useEffect, useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default (props)=> {
    const {id} = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDesc] = useState();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/getOne/'+id)
            .then(res=> {
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDesc(res.data.product.description)
            })
    },[])

    const updateProduct = (e)=> {
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/'+id, {
            title,
            price,
            description
        })
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
            navigate('/')
    };

    return(
        <div className='container' style={{textAlign:'center'}}>
            <h2 style={{ margin: '20px', fontFamily: "sans-serif", fontWeight:'bold', verticalAlign:'inline-block'}}> Update This Product </h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor='title' style={{marginRight:'10px', fontWeight:'bold', fontFamily: "sans-serif"}}>Title: </label>
                    <input type='text' name='title' value={title} onChange={(e)=> {setTitle(e.target.value)}} style={{ borderRadius: '5px' }}/>
                </div>
                <div>
                    <label htmlFor='title' style={{marginRight:'4px', fontWeight:'bold', fontFamily: "sans-serif"}}>Price: </label>
                    <input type='decimal' name='price' value={price} onChange={(e)=> {setPrice(e.target.value)}} style={{ borderRadius: '5px' }}/>
                </div>
                <div>
                    <label htmlFor='title' style={{marginRight:'10px', fontWeight:'bold', fontFamily: "sans-serif", verticalAlign:'top'}}>Description: </label>
                    <textarea type='text' name='description' value={description} onChange={(e)=> {setDesc(e.target.value)}} style={{ borderRadius:'5px', textoverflow:'auto', width:'230px'}}/>
                </div>
                <input className= 'btn btn-primary btn-sm'type='submit' style={{marginTop:'1%'}}/>
            </form>
            <div style={{ verticalAlign:'bottom' ,display:'inline-block', textAlign:'center', margin:'10px'}}>
                <Link to='/'>Go Home</Link>
            </div>
        </div>
    )
};