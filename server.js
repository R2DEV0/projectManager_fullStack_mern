const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config'); 

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

require('./server/routes/product.routes')(app);

app.listen(8000, ()=> console.log('Ready for launch on port 8000'))