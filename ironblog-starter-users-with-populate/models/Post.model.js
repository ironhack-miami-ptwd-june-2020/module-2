const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Post', postSchema);
