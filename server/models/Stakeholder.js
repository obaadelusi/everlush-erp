const mongoose = require('mongoose');
const { Schema } = mongoose;

// Stakeholders are Customers and/or Suppliers
const StakeholderSchema = new Schema({
   name: String,
   isSupplier: {
      type: Boolean,
      default: false
   },
   isCustomer: {
      type: Boolean,
      default: false
   },
   contacts: [
      {
         _id: false,
         street: String,
         state: String,
         country: String,
         phones: [String],
         emails: [String]
      }
   ],
   isActive: {
      type: Boolean,
      default: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Stakeholder', StakeholderSchema);
