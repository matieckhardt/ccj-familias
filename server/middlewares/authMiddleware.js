const { getPayloadData } = require("../helpers/handleJWT");

const authMiddleware = (req, res, next) => {
  
  const token = req.session.userToken;

  if (!token) {
    res.status(403);
    return res.json({ error: "Token is required" });
  }

  const userData = getPayloadData(token);

  if (!userData) {
    res.status(403);
    return res.json({ error: "Token is invalid" });
  }

  req.user = userData;

  return next();
};

module.exports = {
  authMiddleware,
};
