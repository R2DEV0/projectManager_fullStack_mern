const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api', ProductController.createProduct);
    app.get('/api/allProducts', ProductController.allProducts);
    app.get('/api/getOne/:id', ProductController.getOne);
    app.put('/api/update/:id', ProductController.update);
    app.delete('/api/remove/:id', ProductController.removeProduct);
}