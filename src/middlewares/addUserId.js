export const addUserId = (req, res, next) => {
  if (req.user && req.user._id) {
    req.body.userId = req.user._id.toString();
  }
  next();
};
