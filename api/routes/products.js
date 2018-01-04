const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.json({
        message: 'Handling GET requests to products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => {
            console.log(result);
            res.json({
                message: 'Handling POST requests to products',
                createdProduct: result
            });
        })
        .catch(err => console.log(err));
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    // console.log(id);
    Product.findById(id)
        .exec()
        .then(doc => { console.log(doc); res.json(doc); })
        .catch(err => { console.log(err); res.send(500).json({ error: err }); });
});

router.patch('/:productId', (req, res, next) => {
    res.json({
        message: 'updated product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.json({
        message: 'deleted product'
    });
});

module.exports = router;