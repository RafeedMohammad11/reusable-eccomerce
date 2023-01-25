// module.exports = class product {
//     //fetch all products
//     static async getAllProducts(req, res){
//         res.send('Get All Products');
//     }
// }
const { Product } = require("../models/products");


const getAllProducts = async (req, res) => {
    // res.send("GET: Products API");
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

const getProductById = async (req, res) => {
    res.send("GET: Product by ID API");
};

const createProduct = async (req, res) => {
    // res.send("POST: Create Product");
    const product = req.body;
    const imagename = req.file.filename;
    product.image = imagename;
    try {
        await Product.create(product);
        res.status(201).json({
            message: 'Product Created Successfully!'
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

const updateProduct = async (req, res) => {
    res.send("PATCH: Product by ID API");
};

const deleteProduct = async (req, res) => {
    res.send("DELETE: Product by ID API");
};





module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct};
