const Product = require("../model/productmodel");
const Errorhandler = require("../utils/errorhandlers");


// create product  admin

exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


// get all product 

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    // res.status(200).json({ message: "route is working fine" })
    res.status(201).json({
        success: true,
        products
    })
}

// get product details 

exports.getProductdetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {


        return next(new Errorhandler("Product not found", 404));


        // ##### this line of code was working but i cmmt thuis because now i use error handler ####


        // return res.status(500).json({
        //     success: false,
        //     message: "Product not found"
        // })
    }

    res.status(200).json({
        success: true,
        product
    })
}


// update produce --admin 

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {

       

        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}



// delete product 

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product delete succesfully"
    })
}


