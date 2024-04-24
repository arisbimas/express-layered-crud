const prisma = require('../db');
const { findProduct, findProductById, insertProduct, deleteProduct, updateProduct } = require('./product.repository');

const getAllProducts = async () => {
    const products = await findProduct();
    return products;
}

const getProductById = async (id) => {
    const product = await findProductById(id)
    if (!product) {
        throw new Error('Product not found')
    }

    return product
}

const createProduct = async (newProductData) => {
    try {
        const product = await insertProduct(newProductData)
        return product
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteProductById = async (id) => {
    await getProductById(id)
    await deleteProduct(id)
}

const updateProductById = async (id, newProductData) => {
    await getProductById(id)
    const product = updateProduct(id, newProductData)
    return product
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    updateProductById
}