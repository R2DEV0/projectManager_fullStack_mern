import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default (props)=> {
    const {setId, id, removeFromDom} = props;

    const removeProduct = (id)=> {
        axios.delete('http://localhost:8000/api/remove/'+id)
            .then(res=> { removeFromDom(id)
            })
    };

    return(
        <div className='container' style={{ textAlign:'center'}}>
            <h2 style={{fontWeight:'bold', fontFamily:"sans-serif", marginTop: '30px'}}>Current Products in Database</h2>
            <div style={{overflow:'auto', maxHeight: '500px', textAlign:'left'}}>
                {props.product.map((item, i) => {
                    return <ul key={i}> 
                        <li style={{fontSize:'20px', listStyleType:'none'}}><strong>Product: </strong> <Link to={`/${item._id}`} onClick={(e)=> setId(e.target.product.id)} >{item.title}</Link></li>
                        <li style={{listStyleType:'none'}}>
                            <button className='btn btn-outline-danger btn-sm' style={{borderRadius:'5px', marginRight:'5px'}} 
                            onClick={(e)=>{removeProduct(`${item._id}`)}}>
                            Delete
                            </button>
                        </li>
                    </ul>
                })}
            </div>
        </div>
    );
};
