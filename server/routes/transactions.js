const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');
const Product = require('../models/Product');
const Stakeholder = require('../models/Stakeholder');

// Show all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find({}).populate('items.product').populate('stakeholder').sort({ createdAt: -1 }).exec();
  res.render('transactions/index', { transactions });
});

// Render new transaction page
router.get('/new', async (req, res) => {
  const products = await Product.find({}, 'name').sort({ name: 1 }).exec();
  const stakeholders = await Stakeholder.find({}, 'name').sort({ name: 1 }).exec();

  res.render('transactions/new', { products, stakeholders });
});

// Create a new transaction
router.post('/', async (req, res) => {
  const { transaction } = req.body;
  const t = new Transaction(transaction);

  t.createdAt = new Date();
  t.createdBy = 'currentUser'; //from session
  await t.save();
  res.redirect(`transactions/${t._id}`);
});

// Show one transaction
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const t = await Transaction.findById(id).populate('stakeholder').populate('items.product').exec();
  if (!t) {
    res.redirect('/');
  }
  res.render('transactions/show', { t });
});

module.exports = router;
