const express = require('express');
const router = express.Router();

const Supplier = require('../models/Stakeholder');

// https://everlush.netlify.app

// Show all suppliers
router.get('/', async (req, res) => {
   const { skip, limit, q } = req.query;
   if (!q) {
      const suppliers = await Supplier.find({ isSupplier: true })
         .skip(+skip)
         .limit(+limit)
         .sort({ name: 1 })
         .exec();
      res.send(suppliers);
   } else {
      const Q = new RegExp(`${q}`, 'i');
      const suppliers = await Supplier.find({ name: Q, isSupplier: true }).exec();
      res.send(suppliers);
   }
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

   res.redirect(302, `https://everlush.netlify.app/suppliers/${stakeholder._id}`);
});

module.exports = router;
