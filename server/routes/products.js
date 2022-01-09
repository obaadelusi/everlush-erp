const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const Transaction = require('../models/Transaction');

// https://everlush.netlify.app

// Show all products
router.get('/', async (req, res) => {
  const products = await Product.find({}).sort({ name: 1 }).exec();
  res.send(products);
});

// Render new product form
router.get('/new', (req, res) => {
  res.render('products/new');
});

// Create new product
router.post('/', async (req, res) => {
  console.log(req.body);
  const product = new Product(req.body.product);
  console.log(product);
  await product.save();
  res.redirect(302, `https://everlush.netlify.app/products/${product._id}`);
});

// Render edit product form
router.get('/:id/edit', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    res.redirect(302, 'https://everlush.netlify.app/products');
  }
  res.send(product);
});

// Edit product
router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findByIdAndUpdate(productId, req.body.product);
  await product.save();
  res.redirect(302, `https://everlush.netlify.app/products/${productId}`);
});

// Delete product
// router.delete('/:id', async (req, res) => {
//   const productId = req.params.id;
//   await Product.findByIdAndDelete(productId);
//   res.redirect('/products');
// });

// Show one product
router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    res.redirect('/');
  }
  const transactions = await Transaction.find({ 'items.product': productId }).sort({ createdAt: -1 }).populate('stakeholder', 'name').populate('items.product', 'name').exec();
  res.send({ product, transactions });
});

module.exports = router;
