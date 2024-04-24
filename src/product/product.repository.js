// untuk berkomunikasi dengan db
// bisa pake ORM atau raw query
// supaya apa dipisah gini? supaya nanti jika ganti ORM, gantinya cuma disini

const prisma = require('../db');

const findProduct = async () => {
    const product = await prisma.product.findMany()
    return product
}

const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    return product
}

const insertProduct = async (newProductData) => {
    const product = await prisma.product.create({
        data: {
            name: newProductData.name,
            description: newProductData.description,
            price: newProductData.price,
            image: newProductData.image
        }
    });

    return product
}

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id
        }
    })
}

const updateProduct = async (id, newProductData) => {
    const product = await prisma.product.update({
        where: {
            id
        },
        data: {
            name: newProductData.name,
            description: newProductData.description,
            price: newProductData.price,
            image: newProductData.image
        }
    });
    return product
}
module.exports = {
    findProduct,
    findProductById,
    insertProduct,
    deleteProduct,
    updateProduct
}