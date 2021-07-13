import Product from '../models/Products.model'

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body
    const newProduct = new Product({
        name,
        category,
        price,
        imgURL
    })

    const product = await newProduct.save()
    res.status(201).json(product)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)    
}

export const getProduct = async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    res.status(200).json(product)      
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.id
    const product = await Product.findByIdAndDelete(productId)
    res.status(200).json(product)   
}

export const updateProduct = async (req, res) => {
    const productId = req.params.id
    const {name, category, price, imgURL} = req.body
    const newProduct = {
        name,
        category,
        price,
        imgURL
    }

    const product = await Product.findByIdAndUpdate(productId, newProduct, {
        new: true
    })
    res.status(200).json(product)
    
}