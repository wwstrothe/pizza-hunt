// connect mongoose
const { Schema, model } = require('mongoose');

// comment schema
const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;