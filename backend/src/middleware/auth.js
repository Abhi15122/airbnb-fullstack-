const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  const token = authheader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
};

module.exports = protect;
