const mongoose = require('mongoose');
const { Schema } = mongoose;

const BusinessSchema = new Schema({
  legalName: String,
  shortName: String,
  logo: String,
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  foundingDate: Date,
  branches: [
    {
      name: String,
      desc: String,
      street: String,
      state: String,
      country: String,
      phones: [String],
      emails: [String]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Business', BusinessSchema);
