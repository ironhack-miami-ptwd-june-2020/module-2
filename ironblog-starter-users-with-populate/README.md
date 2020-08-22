# IronBlog <small><i>(name of your app)</i></small>

## Description

IronBlog is a social platform that allows authenticated users to create new posts and add comments to it. Users don't have to be authenticated to view all the posts.

## User Stories

**USBAT** - **U**sers **S**hould **B**e **A**ble **T**o

- **404** -USBAT see a nice 404 page when they go to a page that doesn’t exist.
- **500** - USBAT see a nice error page when there is a server error.
- **homepage** - USBAT access the homepage which will be a landing page with the main menu. (_feel free to add more details here_)
- **signup** - USBAT sign up on the webpage so that they can create posts and make comments to the posts.
- **login** - USBAT log in on the webpage so that they can get back to their accounts.
- **logout** - USBAT log out from the webpage so that they can be sure no one will access their accounts.
- **posts** - USBAT see the list of all the posts.
- **post details** - USBAT see the details of each post, including all the comments, to be able to edit it if the post was created by them as well as make a new comments on it.
- etc...

<!-- ## Routes -->

## Tasks

- Create the `User` model
- Create the `Post` model
- Create the `Comment` model
- Add the `/signup` **GET** route

  - Create the _signup_ form

- Add the `/signup` **POST** route

  - Check if credentials are valid, add user to DB

- Add the `/login` **GET** route

  - Create login form

- Add the `/login` **POST** route

  - Check if credentials are valid, log the user in

- Add the `/` **GET** route to access homepage

  - Add homepage view

- Add the `/post-create` **GET** route

  - Create a new post form

- Add the `/post-create` **POST** route

  - Add a new post to the DB

- Add the `/posts` GET route

  - Show all the posts

- Add `/posts/:postId/comment` **POST** route

  - Add a new comment to a specific post

- Add the `/posts/:postId` **GET** route

  - Show a single post details, including the comments related to that post

- You will also have the _update_ and _delete_ routes.

## Models

- The `User` schema:

```js
// to be updated as you develop the app (remove this comment in the end)

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Username is required.'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: [true, 'Password is required.'],
  },
});
```

- The `Post` schema

```js
// to be added
```

- The `Comment` schema

```js
// to be added
```

## File structure

```bash
# run the following
# don't forget to ignore the huge node_modules

$ tree -I node_modules
```

```bash
# expected output (needs to be updated with the final structure of the app and then remove this comment)

├── README.md
├── app.js
├── bin
│   └── www
├── configs
│   ├── db.config.js
│   ├── route-guard.config.js
│   ├── session.config.js
│   └── user-locals.config.js
├── models
│   └── User.model.js
├── package.json
├── public
│   ├── images
│   │   └── favicon.ico
│   ├── javascripts
│   │   └── script.js
│   └── stylesheets
│       └── style.css
├── routes
│   ├── auth.routes.js
│   └── index.routes.js
└── views
    ├── auth
    │   ├── login-form.hbs
    │   └── signup-form.hbs
    ├── error.hbs
    ├── index.hbs
    ├── layout.hbs
    ├── not-found.hbs
    └── users
        └── user-profile.hbs
```

## Backlog

- See the [Trello board]()

## Links

- [Mural - brainstorming and planning]()
- [Trello board]()
- [GitHub repo]()
- [Deployed app]()
- [Slides]()

<hr>

### Using the app

To use this project as your starter code, follow these steps:

```shell
# clone the project
$ git clone https://github.com/sandrabosk/starter-users-with-populate

# navigate to the project
$ cd starter-users-with-populate

# remove .git
$ rm -rf .git

# initialize it as a git repo
$ git init

# create a new repository on your own GitHub and add it as remote origin
$ git remote add origin https://github.com/your-username/repo-you-created.git

# push this code as your starter code (follow the usual steps: git add . , git commit...)

# you are ready to start coding

# install dependencies
$ npm i

# run the app
$ npm run dev
```
