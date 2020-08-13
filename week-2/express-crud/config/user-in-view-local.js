module.exports = (req, res, next) => {
  // we created a variable "user" which now becomes
  // available in all HBS files by default
  res.locals.user = req.session.loggedInUser;
  next();
};
