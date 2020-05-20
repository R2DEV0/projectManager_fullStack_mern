const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'there must be a title'],
            minlength: [2, "product title must have at least 2 characters"]
        },
        price: {
            type: Number,
            required: [true, 'there must be a price'],
        },
        description: {
            type: String,
            required: [true, 'there must be a description'],
            minlength: [5, "the description must have at least 5 characters"]
        }
    }, 
    {timestamps:true}
);

module.exports.Product = mongoose.model('Product', ProductSchema);