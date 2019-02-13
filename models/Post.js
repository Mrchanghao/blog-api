const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  content: {
    type: String,
    default: '',
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})


module.exports = mongoose.model('Post', PostSchema);