const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');
const Product = require('../models/Product');
const Stakeholder = require('../models/Stakeholder');

// Show all purchases
router.get('/', async (req, res) => {
  const purchases = await Transaction.find({ type: 'purchase' }).populate('stakeholder').populate('items.product').sort({ createdAt: -1 }).exec();
  res.render('purchases/index', { purchases });
});

// Render new purchase form
router.get('/new', async (req, res) => {
  const products = await Product.find({ isActive: true }, 'name').sort({ name: 1 }).exec();
  const stakeholders = await Stakeholder.find({ isSupplier: true }, 'name').sort({ name: 1 }).exec();

  res.render('purchases/new', { products, stakeholders });
});

// Create a new purchase
router.post('/', async (req, res) => {
  const { purchase } = req.body;
  const transaction = new Transaction(purchase);

  transaction.type = 'purchase';
  transaction.createdAt = new Date();
  transaction.createdBy = 'currentUser'; //from session
  await transaction.save();
  res.redirect(`transactions/${transaction._id}`);
});

module.exports = router;
