const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    remake: {
      type: Boolean
    },
    rating: {
      type: Number,
      default: 0
    },
    castMembers: { type: [{ type: Schema.Types.ObjectId, ref: 'Cast' }] },
    year: {
      type: Number
    },
    coverImage: {
      type: String
    },
    genre: {
      type: [String]
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
