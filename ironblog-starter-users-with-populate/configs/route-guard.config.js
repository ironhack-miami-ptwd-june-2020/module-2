// add code here

module.exports = (req, res, next) => {
  if (req.session.loggedInUser) next();
  else res.redirect('/login');
};
