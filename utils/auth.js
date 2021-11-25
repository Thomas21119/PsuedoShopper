const withAuth = (req, res, next) => {
  !req.session.logged_in ? res.redirect("/login") : next();
};

module.exports = withAuth;
