const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
   firstName: String,
   lastName: String,
   image: String,
   isActive: Boolean,
   contact: {
      _id: false,
      street: String,
      state: String,
      country: String,
      phones: [String],
      emails: [String]
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

UserSchema.virtual('fullname').get(function () {
   return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('User', UserSchema);
