const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');
const Product = require('../models/Product');
const Stakeholder = require('../models/Stakeholder');

// Show all sales
router.get('/', async (req, res) => {
  const sales = await Transaction.find({ type: 'sale' }).populate('stakeholder').populate('items.product').sort({ createdAt: -1 }).exec();
  res.render('sales/index', { sales });
});

// Render new sale form
router.get('/new', async (req, res) => {
  const products = await Product.find({ isActive: true }, 'name').sort({ name: 1 }).exec();
  const stakeholders = await Stakeholder.find({ isCustomer: true }, 'name').sort({ name: 1 }).exec();

  res.render('sales/new', { products, stakeholders });
});

// Create a new sale
router.post('/', async (req, res) => {
  const { sale } = req.body;
  const transaction = new Transaction(sale);

  transaction.type = 'sale';
  transaction.createdAt = new Date();
  transaction.createdBy = 'currentUser'; //from session
  await transaction.save();
  res.redirect(`transactions/${transaction._id}`);
});

module.exports = router;
