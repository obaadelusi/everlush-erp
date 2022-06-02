const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
   name: {
      type: String,
      trim: true
   },
   image: String,
   category: String,
   description: String,
   sellingPrice: {
      type: Number,
      min: [0, 'selling price cannot be < 0']
   },
   inventory: {
      type: Number,
      min: [0, 'Inventory cannot be < 0']
   },
   lowStock: Number,
   isActive: {
      type: Boolean,
      default: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

// ProductSchema.virtual('margin').get(function () {
//   const profitMargin = ((this.originalSalePrice - this.purchasePrice) / this.originalSalePrice) * 100;
//   return `${profitMargin.toFixed(1)}%`;
// });

module.exports = mongoose.model('Product', ProductSchema);
