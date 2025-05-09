import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import cloudinary from '../config/cloudinary.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const { category, gender, material, search, featured, newArrival } = req.query;
  
  let query = {};
  
  if (category) query.category = category;
  if (gender) query.gender = gender;
  if (material) query.material = material;
  if (featured) query.featured = featured === 'true';
  if (newArrival) query.newArrival = newArrival === 'true';
  
  if (search) {
    query = {
      ...query,
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ],
    };
  }
  
  const products = await Product.find(query);
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, category, gender, material, price, image, cloudinaryId, featured, newArrival } = req.body;

  const product = new Product({
    name,
    description,
    category,
    gender,
    material,
    price,
    image,
    cloudinaryId,
    featured: featured || false,
    newArrival: newArrival || false,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, category, gender, material, price, image, cloudinaryId, featured, newArrival } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.gender = gender || product.gender;
    product.material = material || product.material;
    product.price = price || product.price;
    
    // If there's a new image, update image and cloudinaryId
    if (image && cloudinaryId) {
      // Delete old image from Cloudinary if it exists
      if (product.cloudinaryId) {
        await cloudinary.uploader.destroy(product.cloudinaryId);
      }
      product.image = image;
      product.cloudinaryId = cloudinaryId;
    }
    
    product.featured = featured !== undefined ? featured : product.featured;
    product.newArrival = newArrival !== undefined ? newArrival : product.newArrival;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    // Delete image from Cloudinary
    if (product.cloudinaryId) {
      await cloudinary.uploader.destroy(product.cloudinaryId);
    }
    
    await Product.deleteOne({ _id: product._id });
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };