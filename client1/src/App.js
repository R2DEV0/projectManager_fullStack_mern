import React, {useState} from 'react';
import './App.css';
import Add from './views/Add';
import View from './views/View';
import Update from './views/Update';
import { Router} from '@reach/router';


function App(props) {
  const [id, setId] = useState('');
  const{product, setProduct} = props;
  

  return (
    <div className="container">
      <Router>
        <Add path='/' id={id} setId={setId}/>
        <View path='/:id' id={id} product={product} setProduct={setProduct}/>
        <Update path='/update/:id' id={id} product={product} />
      </Router>
    </div>
  );
}

export default App;
