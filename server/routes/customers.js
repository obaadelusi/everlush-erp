const express = require('express');
const router = express.Router();

const Customer = require('../models/Stakeholder');

// https://everlush.netlify.app/

// Show all customers
router.get('/', async (req, res) => {
   const { skip, limit, q } = req.query;
   if (!q) {
      const customers = await Customer.find({ isCustomer: true })
         .skip(+skip)
         .limit(+limit)
         .sort({ name: 1 })
         .exec();
      res.send(customers);
   } else {
      const Q = new RegExp(`${q}`, 'i');
      const customers = await Customer.find({ name: Q }).exec();
      res.send(customers);
   }
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
   console.log(stakeholder);
   res.redirect(302, `https://everlush.netlify.app/customers/${stakeholder._id}`);
   // res.redirect(302, `https://everlush.netlify.app/stakeholders/${stakeholder._id}`);
});

module.exports = router;
