const express = require('express');
const router = express.Router();

const Stakeholder = require('../models/Stakeholder');
const Transaction = require('../models/Transaction');

// Render edit stakeholder form
router.get('/:id/edit', async (req, res) => {
   const { id } = req.params;
   const stakeholder = await Stakeholder.findById(id);
   if (!stakeholder) {
      res.redirect('/');
   } else {
      res.render('stakeholders/edit', { stakeholder });
   }
});

// Edit a stakeholder
router.put('/:id', async (req, res) => {
   const { id } = req.params;
   const stakeholder = await Stakeholder.findByIdAndUpdate(id, req.body.stakeholder);
   await stakeholder.save();
   console.log(req.body);
   res.redirect(`/stakeholders/${id}`);
});

// Delete a stakeholder
router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   await Stakeholder.findByIdAndDelete(id);
   res.redirect('/customers');
});

// Show one stakeholder
router.get('/:id', async (req, res) => {
   const { id } = req.params;

   const stakeholder = await Stakeholder.findById(id);
   const transactions = await Transaction.find({ stakeholder: id }).sort({ createdAt: -1 }).populate('items.product').exec();
   res.send({ stakeholder, transactions });
});

module.exports = router;
