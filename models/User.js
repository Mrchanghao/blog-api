const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  username: {
    type: String,
    default: '',
    trim: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  password: {
    type: String,
    default: '',
    required: true
  }
})



module.exports = mongoose.model('User', UserSchema);