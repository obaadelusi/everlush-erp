const express = require('express');
const router = express.Router();

const Customer = require('../models/Stakeholder');

// Show all customers
router.get('/', async (req, res) => {
  const { skip, limit } = req.query;
  console.log(skip, limit);
  const customers = await Customer.find({ isCustomer: true })
    .skip(+skip)
    .limit(+limit)
    .sort({ name: 1 })
    .exec();
  // res.render('customers/index', { customers });
  res.send(customers);
});

// Render new customer form
router.get('/new', (req, res) => {
  res.render('customers/new');
});

// Create new customer
router.post('/', async (req, res) => {
  const stakeholder = new Customer(req.body.customer);
  stakeholder.isCustomer = true;
  await stakeholder.save();
  res.redirect(`/stakeholders/${stakeholder._id}`);
});

module.exports = router;
