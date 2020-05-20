const { Product } = require('../models/product.model');

module.exports.createProduct = (req, res)=> {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product=> res.json(product))
        .catch(err=> res.json({ message: 'Something went wrong', error: err }));
};

module.exports.allProducts = (req, res)=> {
    Product.find({})
    .then(allTheProducts=> res.json( allTheProducts ))
    .catch(err=> res.json({ message: 'Something went wrong', error: err }));
};

module.exports.getOne = (req, res)=> {
    Product.findOne({_id: req.params.id})
    .then(product=> res.json({ product }))
    .catch(err=> res.json({ message: 'Something went wrong', error: err }));
};

module.exports.update = (req, res)=> {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct=> res.json(updatedProduct))
        .catch(err=> res.json(err))
};

module.exports.removeProduct = (req, res)=> {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation=> res.json(deleteConfirmation))
        .catch(err=> res.json(err))
};