import React from 'react';
import { Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';


export default (props)=> {
    const {setId, id, product, setProduct} = props;

    const removeFromDom = (id)=> {
        setProduct(product.filter(product=>product.id !==id ));
        navigate('/')
    }

    return(
        <div className='container' style={{ textAlign:'center'}}>
            <h2 style={{fontWeight:'bold', fontFamily:"sans-serif", marginTop: '30px'}}>Current Products in Database</h2>
            <div style={{overflow:'auto', maxHeight: '500px', textAlign:'left'}}>

                {props.product.map((item, i) => {return <ul key={i}> 
                        <li style={{fontSize:'20px', listStyleType:'none'}}><strong>Product: </strong> <Link to={`/${item._id}`} onClick={(e)=> setId(e.target.product.id)} >{item.title}</Link></li>
                        <li style={{listStyleType:'none'}}>
                        <DeleteButton id={id} successCallback={()=> removeFromDom(id)}/>
                        </li>
                    </ul>
                })}
            </div>
        </div>
    );
};
