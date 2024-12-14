export const addUserId = (req, res, next) => {
  req.body.userId = req.user._id;
  next();
};
