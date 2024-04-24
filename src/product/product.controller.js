const express = require('express');
const router = express.Router();
const prisma = require('../db');

const { getAllProducts, getProductById, createProduct, deleteProductById, updateProductById } = require('./product.service');

router.get('/', async (req, res) => {
    const products = await getAllProducts()
    res.send({
        data: products,
        message: 'Products retrieved successfully'
    });
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await getProductById(Number(req.params.productId))
        res.send({
            data: product,
            message: 'Product retrieved successfully'
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }

});

router.post('/', async (req, res) => {
    try {
        const newPoduct = req.body
        const product = await createProduct(newPoduct)
        res.send({
            data: product,
            message: 'Product created successfully'
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }

});

router.delete('/:productId', async (req, res) => {
    try {
        const id = req.params.productId
        const product = await deleteProductById(Number(id))
        res.send({
            data: product,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const id = req.params.productId
        const newPoduct = req.body

        if (!(newPoduct.name && newPoduct.description && newPoduct.price && newPoduct.image)) {
            return res.status(400).send({
                message: 'All fields are required'
            });
        }

        const product = await updateProductById(Number(id), newPoduct)
        res.send({
            data: product,
            message: 'Product updated successfully'
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }

});

router.patch('/:productId', async (req, res) => {
    try {
        const id = req.params.productId
        const newPoduct = req.body

        const product = await updateProductById(Number(id), newPoduct)
        res.send({
            data: product,
            message: 'Product updated successfully'
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

});

module.exports = router