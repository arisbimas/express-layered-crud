const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const productController = require('./product/product.controller');
app.use("/api/products", productController);

app.get('/api', (req, res) => {
    res.send('Express + Prisma');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});