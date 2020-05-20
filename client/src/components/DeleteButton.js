import React from 'react';
import axios from 'axios';

export default (props) =>{
    const {id, seccessCallback} = props;

    const removeProduct = (e)=> {
        axios.delete('http://localhost:8000/api/remove/'+id)
            .then(res=> { 
                seccessCallback();
            })
    }
    return(
        <button className='btn btn-outline-danger btn-sm' style={{borderRadius:'5px', marginRight:'5px'}} 
            onClick={(e)=>{removeProduct(id)}}>
            Delete
        </button>
    )
};