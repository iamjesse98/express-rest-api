const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        message: 'Handling GET requests to products'
    });
});

router.post('/', (req, res, next) => {
    res.json({
        message: 'Handling POST requests to products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    // console.log(id);
    if (id === 'special') {
        res.json({
            message: 'you discovered the special ID',
            id: id
        });
    } else {
        res.json({
            message: 'you passed an ID'
        });
    }
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