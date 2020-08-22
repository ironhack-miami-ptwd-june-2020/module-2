const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model');

// GET route - render a form for users to be able to add title and content of a new post
router.get('/post-create', (req, res) => res.render('posts/create.hbs'));

// POST route - save the new post in the DB

router.post('/post-create', (req, res, next) => {
  const { title, content } = req.body;
  // 'author' field represents the currently logged in user -  but we need only their ID

  Post.create({
    title,
    content,
    author: req.session.loggedInUser._id
  })
    .then(postDocFromDB => {
      console.log(postDocFromDB);
    })
    .catch(err => console.log(`Err while creating a new post: ${err}`));
});

// GET route - to display all the posts (implementation of POPULATE)

router.get('/posts', (req, res, next) => {
  Post.find()
    .populate('author')
    .then(postsFromDB => {
      // console.log(postsFromDB);

      res.render('posts/list.hbs', { posts: postsFromDB });
    })
    .catch(err => console.log(`Err while getting all the posts: ${err}`));
});

// GET route - show the details of a single post

router.get('/posts/:postId', (req, res, next) => {
  Post.findById(req.params.postId)
    // author of a post
    //           VV
    .populate('author comments') // populate both fields - the same as populate one and then populate the other one
    // deep populate ===> populating already populated field
    // check this article: https://stackoverflow.com/questions/18867628/mongoose-deep-population-populate-a-populated-field
    .populate({
      path: 'comments',
      populate: {
        path: 'author' // author of a comment
      }
    })
    .then(foundPost => {
      // console.log(foundPost);
      res.render('posts/details.hbs', { post: foundPost });
    })
    .catch(err => console.log(`Err while getting a single post: ${err}`));
});

module.exports = router;
