const authRoute = (req, res) => {
  res.json({
    message: 'auth',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
};

const refreshTokenRoute = (req, res) => {
  res.json({
    message: 'refresh',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
};

module.exports = {
  authRoute,
  refreshTokenRoute
};
