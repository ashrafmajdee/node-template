const authRoute = (req, res) => {
  res.json({
    message: 'auth',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
};

module.exports = {
  authRoute
};
