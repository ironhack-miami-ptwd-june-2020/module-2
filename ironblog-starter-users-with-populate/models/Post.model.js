const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    imageUrl: {
      type: String,
      default:
        'https://thumbs.dreamstime.com/z/photo-not-available-vector-icon-isolated-transparent-background-photo-not-available-logo-concept-photo-not-available-vector-118978393.jpg'
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Post', postSchema);
