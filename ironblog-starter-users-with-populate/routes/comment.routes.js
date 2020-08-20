const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model');
const Comment = require('../models/Comment.model');

// post route - to save to database a new comment on a specific post
router.post('/posts/:postId/comment', (req, res, next) => {
  const { postId } = req.params;
  const { content } = req.body;

  Post.findById(postId)
    .then(postFromDB => {
      Comment.create({ content, author: req.session.loggedInUser._id })
        .then(newCommentFromDb => {
          // console.log(newCommentFromDb);
          postFromDB.comments.push(newCommentFromDb._id);

          postFromDB
            .save()
            .then(updatedPost => res.redirect(`/posts/${updatedPost._id}`))
            .catch(err => console.log(`Err while saving a comment in a post: ${err}`));
        })
        .catch(err => console.log(`Err while creating a comment on a post: ${err}`));
    })
    .catch(err => console.log(`Err while getting a single post when creating a comment: ${err}`));
});

module.exports = router;
