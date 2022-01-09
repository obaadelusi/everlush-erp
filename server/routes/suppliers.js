const express = require('express');
const router = express.Router();

const Supplier = require('../models/Stakeholder');

// Show all suppliers
router.get('/', async (req, res) => {
  const stakeholders = await Supplier.find({ isSupplier: true }).sort({ name: 1 }).exec();
  res.render('suppliers/index', { stakeholders });
});

// Render new supplier form
router.get('/new', (req, res) => {
  res.render('suppliers/new');
});

// Create new supplier
router.post('/', async (req, res) => {
  const stakeholder = new Supplier(req.body.supplier);
  stakeholder.isSupplier = true;
  await stakeholder.save();
  res.redirect(`/stakeholders/${stakeholder._id}`);
});

module.exports = router;
