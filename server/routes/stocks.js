const express = require('express');
const router = express.Router();

const Stock = require('../models/Transaction');
const Product = require('../models/Product');

// Show all stock
router.get('/', async (req, res) => {
  const products = await Product.find({}, { name: 1, inventory: 1, image: 1 }).sort({ name: 1 });
  const stocks = await Stock.find({}).limit(2).populate('items.product').populate('supplier', 'name').sort({ purchaseTime: -1 }).exec();
  res.render('stocks/index', { products, stocks });
});

// Render new stock page
router.get('/new', async (req, res) => {
  res.render('stocks/new');
});

// Create a new stock entry
router.post('/', async (req, res) => {
  const stock = new Stock(req.body.stock);
  await stock.save();
  res.redirect(`stocks/${stock._id}`);
});

// Show one entry of one product
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const stock = await Stock.findById(id).populate('supplier').populate('items.product').exec();
  res.render('stocks/show', { stock });
});

module.exports = router;
