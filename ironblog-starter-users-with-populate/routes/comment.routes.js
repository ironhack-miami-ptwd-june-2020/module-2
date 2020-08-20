const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model');
const Comment = require('../models/Comment.model');

// post route - to save to database a new comment on a specific post
router.post('/posts/:postId/comment', (req, res, next) => {
  const { postId } = req.params;
  const { content } = req.body;

  // 1. find a post based on the id from the url
  Post.findById(postId)
    .then(postFromDB => {
      // 2. create a new comment
      Comment.create({ content, author: req.session.loggedInUser._id })
        .then(newCommentFromDb => {
          // console.log(newCommentFromDb);

          // 3. push the new comment's id into an array of comments that belongs to the found post
          postFromDB.comments.push(newCommentFromDb._id);

          // 4. save the post with the new comments on it to the database
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
