const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./Product');

const TransactionSchema = new Schema({
  stakeholder: {
    type: Schema.Types.ObjectId,
    ref: 'Stakeholder'
  },
  items: [
    {
      _id: false,
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      },
      sellingPrice: Number,
      quantity: Number,
      purchasePrice: Number,
      stockLeft: Number,
      prevStock: Number,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  paidFull: Boolean,
  type: {
    type: String,
    enum: {
      values: ['sale', 'purchase'],
      message: 'type cannot be {VALUE}'
    }
  },
  isStockAdjustment: Boolean,
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

TransactionSchema.virtual('total').get(function () {
  let totally = 0;
  for (const item of this.items) {
    const price = item.purchasePrice || item.sellingPrice;
    const itemTotal = item.quantity * price;
    totally += itemTotal;
  }
  return `${totally}`;
});

// After saving a Transaction, do this...
TransactionSchema.pre('save', async function (doc) {
  if (doc) {
    for (const item of this.items) {
      const product = await Product.findById(item.product);
      item.prevStock = product.inventory;
      const type = this.type;

      if (type === 'purchase') {
        item.stockLeft = item.prevStock + item.quantity;
      } else if (type === 'sale') {
        item.stockLeft = item.prevStock - item.quantity;
      } else return;

      product.inventory = item.stockLeft;
      await product.save();
    }
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
