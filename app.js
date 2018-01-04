const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!!!'
//     });
// });

app.use(morgan('dev'));

app.use('/products', productRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    // res.status = error.status || 500;
    res.json({
        error: {
            message: error.message
        }
    });
    res.status(error.status || 500);
});

module.exports = app;