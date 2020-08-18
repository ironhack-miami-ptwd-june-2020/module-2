// add code here
module.exports = (req, res, next) => {
  res.locals.user = req.session.loggedInUser;
  next();
};
