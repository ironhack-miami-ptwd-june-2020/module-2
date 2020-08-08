const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const castSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: String,
    age: Number,
    movies: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
    },
    wonAward: {
      type: Boolean,
      default: false
    },
    dob: String,
    role: {
      type: String,
      enum: ['Actor', 'Director', 'Producer', 'Writer', 'Extra'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Cast = model('Cast', castSchema);

module.exports = Cast;

// how to use populate in routes in order to populate the db info from the content of the id in the array.

// Cast.findById("asd0lfasdglfja").populate('movies')
// .then(castMember => {
//     res.render('actorDetails', { cast: castMember });
// })

// without using the .populate method

// Cast.findById("asd3lfasd5lfja")
// .then(castMember => {
//     Movie.find({_id: {$in: castMember.movies}})
//         .then(allMovies => {
//             const castMemberInfo = castMember;
//             castMemberInfo.movies = allMovies;
//         res.render('actorDetails', {cast: castMemberInfo});
//     })
// })
